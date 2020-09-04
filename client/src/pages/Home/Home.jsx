import React, { Component } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Carousel from "react-bootstrap/Carousel";
import ControlledCarousel from "../../components/ControlledCarousel";

import "./Home.scss";

export default class Home extends Component {
  state = {
    date: new Date(),
  };

  render() {
    return (
      <section className='main-page-section'>
        <div className='main-page-section__heading'>
          <h1>Thai Restaurants</h1>
          <h2>Luica's Kitchen</h2>
          <h3> 1149 Picot Ave, Bathurst, NB E2A 4T7 </h3>
        </div>

        <div className='side-options'>
          <ControlledCarousel />
          <div className='info-container'>
            <div>
            <h2 className='kitchen-info'>Kitchen Information</h2>
            <p className='kitchen-info__content'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nibh lorem, tempor cursus nunc fringilla, consequat efficitur
              dolor. Nulla mattis ornare dui. Aenean vestibulum nibh quis
              efficitur tristique. Phasellus vitae massa euismod, viverra nisi
              et, bibendum arcu. Quisque convallis, erat cursus varius
              vulputate, risus ligula porta tortor, non semper nibh turpis ac
              lorem. Ut elit metus, tristique sed turpis non, pretium bibendum
              elit. Phasellus at consequat tortor.
            </p>
            <h2>Kitchen Amenities</h2>
            <ul className='kitchen-info__list'>
              <li>Hood oven</li>
              <li>Large fridge</li>
              <li>Large Freezer</li>
              <li>Air Ventilation</li>
              <li>Spacious</li>
            </ul>
            </div>
          </div>
        </div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          activeStartDate={this.state.date}
          className='calendar'
          tileDisabled={this.disableDate}
          //   showDoubleView="true"
        />
      </section>
    );
  }
}
