import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Post from "./Components/Post";
import Contact from "./Components/Contact";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import axios from "./Services/instance"
import PostPreview from "./Components/PostPreview";

// import {createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      // 1- login, 0- logout
       auth:true,
       posts:null,
    }
    console.log("constructore in app.js")
  }
  authHandler = () => {
     this.setState({auth:!this.state.auth})
  };
  static getDerivedStateFromProps(props,state){
    console.log("[app] getDerivedStateFromProps")
    return null;
  }
  componentDidMount(){
    console.log("[app] componentDidMount")
    axios.get('posts')
    .then((response)=>{
        this.setState({posts:response.data},()=>{
          console.log("data",this.state.posts)
        })
    }).catch((Error)=>{
      console.log("error",Error)
    })
  }

  deleteHandler = (id)=>{
    axios.delete('posts'+`${"/"+id}`)
    .then((res)=>{
      console.log("Delete res",res)
    }).catch((error)=>{
      console.log(error)
    })
  }

  render() {
    let posts = null;
    if(this.state.posts != null){
      const tenposts = this.state.posts.slice(0,10)
      console.log("tenposts",tenposts)
       posts = tenposts.map((post) => {
        return <PostPreview delete={()=>{this.deleteHandler(post.id)}}  key={post.id} title={post.title} body={post.body}  />
      })
    }

    return (
      <>
        <Router>
          <NavBar login={this.authHandler} status={this.state.a} />
          <Switch>
            <Route path="/about">
              <Header title="About us" img="about-bg.jpg" />
              <About />
            </Route>
            <Route path="/post">
               <Header title="Man must explore, and this is exploration at its greatest" img="post-bg.jpg" />
               <Post />
            </Route>
            <Route path="/contact">
              <Header title="Contact us" img="contact-bg.jpg" />
              <Contact />
            </Route>
            <Route path="/" >
              <Header title="deepak blog" img="home-bg.jpg" />
              <Home>
                {posts}
              </Home>
            </Route>
            <Route path="*">
              <Header title="404 Page not found" img="404-Page.jpg" />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}
