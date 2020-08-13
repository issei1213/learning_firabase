import React, { useState, useReducer } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, InputGroup, Input, InputGroupAddon, Button, Table } from 'reactstrap';

function App() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }

  const addTodo = text => {
    const newTodos = [...todos, text]
    setTodos(newTodos)
    console.log(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }
  return (
    <div className="App">
      <Container>
        <h1 className="mt-4">Todo リスト</h1>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Input type="text"
              value={value}
              onChange={e => setValue(e.target.value)} />
            <InputGroupAddon addonType="append">
              <Button type="submit" color="primary">追加</Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
      </Container>

      {/* リスト表示 */}
      <Container>
        <Table>
          <tbody>
            {todos && todos.map((todo, index) => (
            <tr key={index}>
              <th className="text-left">
                {todo}
              </th>
              <td className="text-right">
                <Button color="danger" onClick={() => removeTodo(index)}>削除</Button>
              </td>
            </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
