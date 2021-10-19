import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import './components/Form.css';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정  
  state = {
    //input : Form.js에 input필드의 입력하는 값을 저장할 상태변수
    input: '',
    todos: [
      { id: 0, text: '리액트 소개', checked: false },
      { id: 1, text: '리액트 구조', checked: true },
      { id: 2, text: '리액트 사용', checked: false }
    ]
  }

  //event handler method 선언
  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }
  handleCreate = () => {
    const { input, todos } = this.state;
    const todo = {
      id: this.id++,
      text: input,
      checked: false
    };
    this.setState({
      // concat 을 사용하여 배열에 추가
      todos: todos.concat( todo ),
      input:'', // input 초기화
    });
  }
  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 이면 handleCreate 호출
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }
  handleRemove = (id) => {
    this.setState({
      todos:this.state.todos.filter((todo) => todo.id !== id)
    });
  }
  handleToggle = (id) => {
    this.setState({
      todos:this.state.todos.map((todo) => todo.id === id ? {...todo,checked:!todo.checked} : todo)
    });
  }

  render() {
    const {input, todos} = this.state;
    const {handleChange,handleCreate,handleKeyPress,handleRemove,handleToggle} = this;
    return (
      <div>
        <TodoListTemplate form={<Form todo={input} 
                                      myChange={handleChange} 
                                      myCreate={handleCreate}
                                      myKeyPress={handleKeyPress}
                                      />}>
          <TodoItemList todos={todos}
                        myRemove={handleRemove} 
                        myToggle={handleToggle}
                        />
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;