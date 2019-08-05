/* @flow weak */

import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button
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

    this.props.addTodo(this.state.fieldTodo);
    this.setState({
      fieldTodo:""
    });

  }

  render(){
    return(

      <View style={styles.container}>
        <Text style={{alignSelf:"center",color:"black",fontSize:18}}>Add todo</Text>
        <View style={{flexDirection:'row',alignSelf:'stretch',alignItems:'center',justifyContent:'center'}}>
          <TextInput
            style={{marginRight:40,alignSelf:'center',width:200,height:40,color:'black',borderColor:"#0022a9",borderWidth:1}}
            value={this.state.fieldTodo}
            onChangeText={value => this.setState({fieldTodo:value})} />

          <Button onPress={ ()=> this.addNew()} title={"add"} style={{height:40,width:40,backgroundColor:'gray',color:'white'}}></Button>
        </View>

        {
          this.props.todos.map( (todo,index)=> ( <Text style={{marginLeft:10,alignSelf:'flex-start',marginTop:5,borderBottomColor:'gray',borderBottomWidth:1,color:todo.completed == true ? "#22b900":"red"}} key={`inlK${index}`}>{todo.text}</Text> ) )
        }
      </View>
    )
  }
}
const mapStateTodos = state => ({
  todos: state.todos,
})
export default connect(mapStateTodos,{addTodo})(ListTodos);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
