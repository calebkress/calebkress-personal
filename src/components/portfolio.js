import React, {Component} from 'react';

class Portfolio extends Component {
  render () {
    return (
      <div class="projects">
        <div class="perkolator">
          <em><u><h4><a href="https://github.com/inanimatedObjects/perkolator"> Perkolator </a></h4></u></em>
          <p>A d3.js interactive visualization that enables users to conceptualize total compensation as an employee and more effectively negotiate with employers.</p>
        </div>
        <div class="datasettools">
          <em><u><h4><a href="https://github.com/PhiDataKappa/dataset.tools"> dataset.tools </a></h4></u></em>
          <p>An Electron desktop application which allows users to manage datasets on data.world, a collaborative data sharing website.</p>
        </div>
        <div class="campfire">
          <em><u><h4><a href="http://www.campfireonline.net"> Campfire </a></h4></u></em>
          <p>A React.js collaborative storytelling application, where users can contribute to a story 150 characters at a time.</p>
        </div>
      </div>
    )
  }
}

export default Portfolio;
