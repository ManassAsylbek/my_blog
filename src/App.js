import React from "react";
import './App.css';
import Header from "./components/Header";
import BlogEntries from "./components/BlogEntries";
import AboutCard from "./components/AboutCard";
import Posts from "./components/Posts";
import Tags from "./components/Tags";
import Footer from "./components/Footer";


const MyBlog ={
    blog:[
        {img:'https://www.w3schools.com/w3images/woods.jpg',title:'TITLE HEADING',data:'April 7, 2014',
            text:'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat.' +
                ' Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper.' +
                ' Praesent tincidunt sed' +
                'tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.'},

        {img:'https://www.w3schools.com/w3images/bridge.jpg',title:'BLOG ENTRY',data:'April 2, 2014',
            text:'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat.' +
                ' Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper.' +
                ' Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida' +
                ' diam non fringilla.'}
    ],

    posts: [
        {img:'https://www.w3schools.com/w3images/workshop.jpg',title:'Lorem',text:'Sed mattis nunc'},
        {img:'https://www.w3schools.com/w3images/gondol.jpg',title:'Ipsum',text:'Praes tinci sed'},
        {img:'https://www.w3schools.com/w3images/skies.jpg',title:'Dorum',text:'Ultricies congue'},
        {img:'https://www.w3schools.com/w3images/rock.jpg',title:'Mingsum',text:'Lorem ipsum dipsum'}
    ],

}

function App() {
    return (
        <>
            <div className="w3-content" style={{maxWidth: 1400}}>
                <Header />
                <div className="w3-row">
                    <div className="w3-col l8 s12">
                        <BlogEntries blog={MyBlog.blog}/>
                    </div>

                    <div className="w3-col l4">
                        <AboutCard/>
                        <Posts posts={MyBlog.posts}/>
                        <Tags/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default App;
