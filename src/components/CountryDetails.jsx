import React from "react";

export default function CountriesDetails(props) {

    const styleDetails = {
        with:'30%'
    }


    return (
        <div class="col-7">
        <h1>France</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={styleDetails}>Capital</td>
              <td>Paris</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                551695 km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  <li><a href="/AND">Andorra</a></li>
                  <li><a href="/BEL">Belgium</a></li>
                  <li><a href="/DEU">Germany</a></li>
                  <li><a href="/ITA">Italy</a></li>
                  <li><a href="/LUX">Luxembourg</a></li>
                  <li><a href="/MCO">Monaco</a></li>
                  <li><a href="/ESP">Spain</a></li>
                  <li><a href="/CHE">Switzerland</a></li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )

}