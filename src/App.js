import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text:"",
      characterCount:0,
      wordCount:0,
      sentenceCount:0,
      paragraphCount:0
    }
    this.handleChange=this.handleChange.bind(this)
    //this.setCounts = this.setCounts.bind(this)
  }
 setCounts = value => {
   this.setState({text: value})
    const trimmedValue = value.trim();
    this.setState({characterCount:trimmedValue.length});

    const words = value.match(/\b[-?(\w+)?]+\b/gi);
    if (words){
      this.setState({wordCount:words.length})
    }
    else{
      this.setState({wordCount:0})
    }

    if(words){
      const sentences = value.split(/[.|!|?]+/g);

      this.setState({sentenceCount:sentences.length-1})
    }
    else{
      this.setState({sentenceCount:0})
    }

    if(words){
      var paragraphs = value.replace(/\n$/gm,'').split(/\n/);
      this.setState({paragraphCount: paragraphs.length});
    }
    else{
      this.setState({paragraphCount: 0});
    }
  }

  handleChange = e => this.setCounts(e.target.value);
  render(){
  return (
    <div className="App">
      <div>
        <h1>WORD COUNTER APP</h1>
      </div>
      <div className="output">
        <textarea placeholder="Enter your text here" onChange={this.handleChange} value={this.state.text}></textarea>
        <div className="words">
            <p><strong>Character Count:</strong> <span>{this.state.characterCount}</span> <br/>
            <strong>Word Count:</strong><span>{this.state.wordCount}</span> <br/>
            <strong>Sentence Count:</strong> <span>{this.state.sentenceCount}</span> <br/>
            <strong>Paragraph Count:</strong> <span>{this.state.paragraphCount}</span> </p>
        </div>
        
      </div>
    </div>
    
  );
}}


export default App;
