import React, { useEffect, useMemo, useState } from 'react'
/* 
function usestate(dato) {
  return [dato, function (newdata) { data = newdata }]
} */
const CallApiWithHook = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    async function didMount() {
      let resp = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!resp.ok) {
        alert("error de petision")
        return;
      }
      let json = await resp.json();
      setPosts(json)
      /* this.setState({
        posts: json
      }) */
    }
    didMount();
  }, [])
  useEffect(function () {
    console.log("los datos del post han sido cambiados", posts)
  }, [posts])
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
            posts.map(post => {
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
export default CallApiWithHook