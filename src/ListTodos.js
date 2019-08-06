/* @flow weak */

import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';
import {
  addTodo,
  removeTodo,
  completeTodo,
  visibilityFilter
} from '../redux/actions/actions';
import {connect} from 'react-redux'

class ListTodos extends React.Component {

  constructor(props){
    super(props);
    this.state={
      fieldTodo:""
    }
  }

  componentDidMount() {
      console.log("list log=====")
      console.log(this.props.todos);
  }

  addNew(){
    if(this.state.fieldTodo == "") return;
    this.props.addTodo(this.state.fieldTodo);
    this.setState({
      fieldTodo:""
    });

  }

  completeTask(index){

    this.props.completeTodo(index)
  }

  removeTask(index){
    console.log("catchme "+index )
    this.props.removeTodo(index)
  }

  render(){
    const { todos } = this.props;
    console.log("render =====")
    console.log(todos)
    return(

      <View style={styles.container}>
        <Text style={{alignSelf:"center",color:"black",fontWeight:'bold',fontSize:18}}>Add todo with redux</Text>
        <View style={{marginTop:20,marginBottom:20,flexDirection:'row',alignSelf:'stretch',alignItems:'center',justifyContent:'center'}}>
          <TextInput
            style={{marginRight:40,alignSelf:'center',width:200,height:40,color:'black',borderColor:"#0022a9",borderWidth:1}}
            value={this.state.fieldTodo}
            onChangeText={value => this.setState({fieldTodo:value})} />

          <TouchableOpacity onPress={ ()=> this.addNew()} style={{borderRadius:10,height:40,width:40,backgroundColor:'gray',alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:"white",fontWeight:'bold'}}>ADD</Text>
          </TouchableOpacity>
        </View>

        {
          todos.map( (todo,index)=> (
            <View style={{marginTop:15,flexDirection:'row',alignSelf:'flex-start'}} key={`inlK${index}`}>
              <Text style={{marginLeft:10,marginRight:10,alignSelf:'flex-start',borderBottomColor:'gray',borderBottomWidth:1,color:todo.completed == true ? "#22b900":"red"}}>{todo.text}</Text>
              {
              todos.completed != true &&  <TouchableOpacity style={{borderRadius:5,backgroundColor:"#22b900",height:30,width:null,fontSize:14,justifyContent:'center',alignItems:'center'}} onPress={()=> this.completeTask(todo.index)} >
                  <Text style={{padding:5,color:"white",fontWeight:'bold'}}>complete</Text>
                </TouchableOpacity>
              }
              <TouchableOpacity style={{borderRadius:5,marginLeft:5,backgroundColor:"red",height:30,width:null,fontSize:14,justifyContent:'center',alignItems:'center'}} onPress={()=>this.removeTask(todo.index)} >
                <Text style={{padding:5,color:"white",fontWeight:'bold'}}>remove</Text>
              </TouchableOpacity>
            </View>
           ) )
        }
      </View>
    )
  }
}
const mapStateTodos = state => ({
  todos: state.todos,
})
export default connect(mapStateTodos,{
  addTodo,
  removeTodo,
  completeTodo})(ListTodos);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
