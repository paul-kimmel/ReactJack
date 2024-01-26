import React, { Component } from 'react';
import GameWrapper from './GameWrapper';

import {
  Collapse, Navbar, NavbarBrand, NavbarToggler, DropdownMenu, DropdownToggle, DropdownItem, UncontrolledButtonDropdown
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;
    
  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.hitClick = this.hitClick.bind(this);
    this.standClick = this.standClick.bind(this);
    this.dealClick = this.dealClick.bind(this);
    this.surrenderClick = this.surrenderClick.bind(this);
    this.doubleClick = this.doubleClick.bind(this);
    this.splitClick = this.splitClick.bind(this);
    this.increaseBetClick = this.increaseBetClick.bind(this);
    this.decreaseBetClick = this.decreaseBetClick.bind(this);
    this.dealSplitGameClick = this.dealSplitGameClick.bind(this);
    
    this.state = {
      collapsed: true,
    };

    document.addEventListener('keydown', (event) => this.onKeyDown(event));
  }


  hitClick() {
    GameWrapper.hit();
  }

  standClick() {
    GameWrapper.stand();
  }

  dealClick() {
    GameWrapper.deal();
  }

  newGameClick() {
    GameWrapper.newGame();
  }

  surrenderClick() {
    GameWrapper.surrender();
  }

  splitClick() {
    GameWrapper.split();
  }

  doubleClick() {
    GameWrapper.double();
  }

  increaseBetClick() {
    GameWrapper.increaseBet();
  }

  decreaseBetClick() {
    GameWrapper.decreaseBet();
  }

  dealSplitGameClick() {
    GameWrapper.dealSplitGame();
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  onKeyDown(event) {
    switch (event.keyCode) {
      case 68: /* D - double */
        this.doubleClick();
        break;
      case 83: /* S - Split */
        this.splitClick();
        break;
      case 32: /* Space - hit or deal */
        this.hitClick();
        break;
      case 13: /* enter */
        this.standClick();
        break;
      case 88: /* X - Surrender */
        this.surrenderClick();
        break;
      case 38: /* up arrow - increment bet */
      case 107:
        this.increaseBetClick();
        break;
      case 40:
      case 109: /* down arrow or - - decrement bet */
        this.decreaseBetClick();
        break;
      default:
        break;
    }
  }


  render() {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
          <NavbarBrand tag={Link} to="/">ReactJack</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <UncontrolledButtonDropdown >
              
                <DropdownToggle nav>
                Game
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag={Link} to="/game" onClick={this.newGameClick}>New Game</DropdownItem>
                  
                  <DropdownItem tag={Link} onClick={this.dealClick}>Deal</DropdownItem>
                </DropdownMenu>
              
              </UncontrolledButtonDropdown>
              <UncontrolledButtonDropdown>
              
                <DropdownToggle  nav>
                  Choices
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem tag={Link} onClick={this.hitClick}>Hit<span style={{ float: "right" }}>Space</span></DropdownItem>
                  <DropdownItem tag={Link} onClick={this.doubleClick}>Double<span style={{ float: "right" }}>D</span> </DropdownItem>
                  <DropdownItem tag={Link} onClick={this.splitClick}>Split<span style={{ float: "right" }}>S</span></DropdownItem>
                  <DropdownItem tag={Link} onClick={this.surrenderClick}>Surrender<span style={{ float: "right" }}>X</span></DropdownItem>
                  <DropdownItem tag={Link} onClick={this.standClick}>Stand<span style={{ float: "right" }}>Enter</span></DropdownItem>
                  <DropdownItem disabled={true} tag={Link} to="/draw-card">Insurance</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={Link} onClick={this.increaseBetClick}><span style={{ float: "right" }}>↑</span>Increase Bet</DropdownItem>
                  <DropdownItem tag={Link} onClick={this.decreaseBetClick}>Decrease Bet<span style={{ float: "right" }}>↓</span></DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={Link} to="/draw-card">Deal</DropdownItem>
                  <DropdownItem tag={Link} onClick={this.dealSplitGameClick}>Deal Split</DropdownItem>
                </DropdownMenu>
                
              </UncontrolledButtonDropdown>
              <UncontrolledButtonDropdown>
                <DropdownToggle nav>
                  Help
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag={Link} to="/draw-card">About</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={Link} to="/demo-hand">Demo Hand</DropdownItem>
                  <DropdownItem tag={Link} to="/demo-object">Demo Object</DropdownItem>

                </DropdownMenu>
              </UncontrolledButtonDropdown>
              
            </ul>
          </Collapse>
        </Navbar>              
      </header>
    );
  }
}
