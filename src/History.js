import React from 'react';
import './Home.css';

function History() {
  return (
    <div>
      <div className="content-container">
        <h2 className="title-color">Cincinnati's History</h2>
        <p className="text-color">
          Cincinnati, often referred to as the "Queen City," has a rich and diverse history. 
          Founded in 1788, it has played a significant role in the development of the Midwest.
          From its early days as a river port to its industrial boom during the 19th century, 
          Cincinnati has a fascinating story to tell. Explore the city's historical landmarks, 
          cultural heritage, and the people who have shaped its history.
        </p>

        {/* Cards for Famous People */}
        <div className="card-container">
          {/* Card 1 */}
          <div className="card">
            <img src={require('./imgs/Mark.jpg')} className="card-img-top" alt="Mark" />
            <div className="card-body">
              <p className="card-text">Some details about Mark.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <img src={require('./imgs/Neil.jpg')} className="card-img-top" alt="Neil" />
            <div className="card-body">
              <p className="card-text">Some details about Neil.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card">
            <img src={require('./imgs/Steven.jpg')} className="card-img-top" alt="Steven" />
            <div className="card-body">
              <p className="card-text">Some details about Steven.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;