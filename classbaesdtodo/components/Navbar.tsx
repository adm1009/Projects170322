import React, { Component } from 'react'
interface Props {
    name:string
}
export default class Navbar extends React.Component<Props> {
  render() {
    return (
      <div><h1>{this.props.name}'s ToDO List</h1></div>
    )
  }
}
