import React, { Component } from 'react'
import Table from '../Table'
class CallApi extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }
  async componentDidMount() {
    //fetch
    let resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!resp.ok) {
      alert("error de petision")
      return;
    }
    let json = await resp.json();
    this.setState({
      posts: json
    })
  }
  render() {
    return <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <h1> LLamada a Api</h1>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <td>User Id</td>
              <td>id</td>
              <td>titulo</td>
              <td>body</td>
            </tr>
          </thead>
          <tbody>
            {
              this.state.posts.map(post => {
                return <tr key={post.id}>
                  <td>{post.userId}</td>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  }
}
export default CallApi