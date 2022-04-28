import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header className="p-4 bg-sky-700 print:hidden">
        <h1 className="text-white text-2xl text-center lg:text-left">
          CV Maker
        </h1>
      </header>
    );
  }
}
