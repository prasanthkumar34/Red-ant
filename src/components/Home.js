import React from "react";
import M from 'materialize-css';

export class Home extends React.Component {
  state = {
    mag:'',
    note:'',
    count:0,
    words:'',
}

handleChange = (e) => {
  this.setState({
      [e.target.name]: e.target.value
  })
}

verifyNotes = (e) => {
  this.state.words='';
  this.state.count=0;
  var result = this.state.mag.includes(this.state.note)
  if(result){
    console.log("Success")
    M.toast({html: 'The kidnapper could have written that note from the initial text input', classes: 'red'});
  }
  else{
    console.log("Failed")
    var res = this.state.note.split(" ")
    for( var chk=0;chk<res.length;chk++){
      if(this.state.mag.includes(res[chk])!=true){  
          this.state.words = this.state.words.concat(res[chk]+ " ");
          this.state.count++;
      }
    }
    M.toast({html: 'Words Count: '+ this.state.count, classes: 'green'});
    M.toast({html: 'Words: '+ this.state.words, classes: 'green'});
    }
}


  render(){
        return(
          <div class="Home">
            <span>
             <h5 class="flow-text center-align">Ransom Notes Identifier</h5>
            </span>
            <div className="container"> 
               <div class="row">
                  <div class="input-field col s12">
                  <i class="material-icons prefix">book</i>
                    <textarea id="mag" name="mag" class="materialize-textarea" value={this.state.mag} onChange={this.handleChange} placeholder="Enter a Magazine"></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                  <i class="material-icons prefix">note</i>
                    <textarea id="note" name="note" class="materialize-textarea" value={this.state.note} onChange={this.handleChange} placeholder="Enter the Note"></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                  <button class="black btn center-align" type="submit" name="action" onClick={this.verifyNotes}>Verify
                 </button>
                 </div>
                 </div>
               </div> 
             </div> 
        );
        }
      }

export default Home;