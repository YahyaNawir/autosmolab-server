const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080; // Use the provided port or default to 8080

app.use(cors()); // Enable CORS for all routes

app.use(bodyParser.json());

// Constants for endpoint paths

const START_SERVER_PATH = '/startserver';
const FLIGHT_INSTRUCTION = '/flightinstruction';
const START_FLIGHTINTRO = '/flightintroduction';
const CEILING_INTENSITY = '/CeilingIntensity';
const CEILING_COLOR = '/Ceilingcolortest';
const WINDOW_INTENSITY = '/windowlightintensity';
const WINDOW_COLOR = '/windowcolorlight';
const SEAT_SELECTION = '/seatselection';
const PEOPLE_VISIBILITY = '/peoplevisibility';


const FROM_STAGE_PAWN = '/from_stage_pawn';
const FROM_HOME_PAWN = '/from_home_pawn';
const FROM_PLANEVR_PAWN = '/from_plane_pawn';
const MOVE_TO_RUNWAY = '/flightsimulation';



let storedData = {
  status: null,
  Parameters: null,
  flightinstruction: null,
  flightintroduction: null,
  CeilingIntensity: null,
  Ceilingcolortest: null,
  windowlightintensity: null,
  windowcolorlight: null,
  seatselection: null,
  peoplevisibility: null,

  from_stage_pawn: null,
  from_home_pawn: null,
  from_plane_pawn: null,
  flightsimulation: null,

  
};



// GET endpoint for /startserver
app.get(START_SERVER_PATH, (req, res) => {
  console.log(`Received GET request at ${START_SERVER_PATH}`);
  res.status(200).json({ status: storedData.status });
});


// PUT endpoint for /startserver
app.put(START_SERVER_PATH, (req, res) => {
  console.log(`Received PUT request at ${START_SERVER_PATH}`);

  const requestData = req.body;
  storedData = {
    status: requestData.status,
  };

  console.log('Stored data:', storedData);

  res.status(200).json({ message: 'Data stored successfully' });
});




// PUT & GET endpoint for /move to runway
app.put(MOVE_TO_RUNWAY, (req, res) => {
  console.log(`Received PUT request at ${MOVE_TO_RUNWAY}`);

  const requestData = req.body;
  storedData = {
    ...storedData,
    flightsimulation: requestData.flightsimulation,
  };

  console.log('Stored data:', storedData);

  res.status(200).json({ message: ' data stored successfully' });
});

app.get(MOVE_TO_RUNWAY, (req, res) => {
  console.log(`Received GET request at ${MOVE_TO_RUNWAY}`);
  res.status(200).json({ flightsimulation: storedData.flightsimulation });
});








// PUT & GET endpoint for /from_plane_pawn
app.put(FROM_PLANEVR_PAWN, (req, res) => {
  console.log(`Received PUT request at ${FROM_PLANEVR_PAWN}`);

  const requestData = req.body;
  storedData = {
    ...storedData,
    from_plane_pawn: requestData.from_plane_pawn,
  };

  console.log('Stored data:', storedData);

  res.status(200).json({ message: ' data stored successfully' });
});

app.get(FROM_PLANEVR_PAWN, (req, res) => {
  console.log(`Received GET request at ${FROM_PLANEVR_PAWN}`);
  res.status(200).json({ from_plane_pawn: storedData.from_plane_pawn });
});



// PUT & GET endpoint for /from_home_pawn
app.put(FROM_HOME_PAWN, (req, res) => {
  console.log(`Received PUT request at ${FROM_HOME_PAWN}`);

  const requestData = req.body;
  storedData = {
    ...storedData,
    from_home_pawn: requestData.from_home_pawn,
  };

  console.log('Stored data:', storedData);

  res.status(200).json({ message: ' data stored successfully' });
});

app.get(FROM_HOME_PAWN, (req, res) => {
  console.log(`Received GET request at ${FROM_HOME_PAWN}`);
  res.status(200).json({ from_home_pawn: storedData.from_home_pawn });
});






// PUT & GET endpoint for /from_stage_pawn
app.put(FROM_STAGE_PAWN, (req, res) => {
  console.log(`Received PUT request at ${FROM_STAGE_PAWN}`);

  const requestData = req.body;
  storedData = {
    ...storedData,
    from_stage_pawn: requestData.from_stage_pawn,
  };

  console.log('Stored data:', storedData);

  res.status(200).json({ message: ' data stored successfully' });
});

app.get(FROM_STAGE_PAWN, (req, res) => {
  console.log(`Received GET request at ${FROM_STAGE_PAWN}`);
  res.status(200).json({ from_stage_pawn: storedData.from_stage_pawn });
});







// PUT & GET endpoint for /peoplevisibility
app.put(PEOPLE_VISIBILITY, (req, res) => {
  console.log(`Received PUT request at ${PEOPLE_VISIBILITY}`);

  const requestData = req.body;
  storedData = {
    ...storedData,
    peoplevisibility: requestData.peoplevisibility,
  };

  console.log('Stored people visibility  data:', storedData);

  res.status(200).json({ message: 'people visibility data stored successfully' });
});

app.get(PEOPLE_VISIBILITY, (req, res) => {
  console.log(`Received GET request at ${PEOPLE_VISIBILITY}`);
  res.status(200).json({ peoplevisibility: storedData.peoplevisibility });
});




// PUT & GET endpoint for /flightinstruction
app.put(FLIGHT_INSTRUCTION, (req, res) => {
  console.log(`Received PUT request at ${FLIGHT_INSTRUCTION}`);

  const requestData = req.body;
  storedData = {
    ...storedData,
    flightinstruction: requestData.flightinstruction,
  };

  console.log('Stored flight instruction  data:', storedData);

  res.status(200).json({ message: 'flight instruction data stored successfully' });
});

app.get(FLIGHT_INSTRUCTION, (req, res) => {
  console.log(`Received GET request at ${FLIGHT_INSTRUCTION}`);
  res.status(200).json({ flightinstruction: storedData.flightinstruction });
});






// PUT & GET endpoint for /flightintroduction
app.put(START_FLIGHTINTRO, (req, res) => {
  console.log(`Received PUT request at ${START_FLIGHTINTRO}`);

  const requestData = req.body;
  storedData = {
    ...storedData,
    flightintroduction: requestData.flightintroduction,
  };

  console.log('Stored flight intro data:', storedData);

  res.status(200).json({ message: 'flight intro data stored successfully' });
});

app.get(START_FLIGHTINTRO, (req, res) => {
  console.log(`Received GET request at ${START_FLIGHTINTRO}`);
  res.status(200).json({ flightintroduction: storedData.flightintroduction });
});





// PUT & GET endpoint for /CeilingIntensity
app.put(CEILING_INTENSITY, (req, res) => {
  console.log(`Received PUT request at ${CEILING_INTENSITY}`);

  const requestData = req.body;
  storedData = {
    ...storedData,
    CeilingIntensity: requestData.ceilingvalue,
  };

  console.log('Stored ceiling intensity data:', storedData);

  res.status(200).json({ message: 'Ceiling intensity data stored successfully' });
});

app.get(CEILING_INTENSITY, (req, res) => {
  console.log(`Received GET request at ${CEILING_INTENSITY}`);
  res.status(200).json({ CeilingIntensity: storedData.CeilingIntensity });
});




// PUT & GET endpoint for /Ceilingcolortest
app.put(CEILING_COLOR, (req, res) => {
  console.log(`Received PUT request at ${CEILING_COLOR}`);

  const requestData = req.body;
  storedData = {
    ...storedData,
    Ceilingcolortest: requestData.ceilingcolorvalue,
  };

  console.log('Stored Ceiling color data:', storedData);

  res.status(200).json({ message: 'Ceiling color data stored successfully' });
});

app.get(CEILING_COLOR, (req, res) => {
  console.log(`Received GET request at ${CEILING_COLOR}`);
  res.status(200).json({ Ceilingcolortest: storedData.Ceilingcolortest });
});





// PUT & GET endpoint for /windowlightintensity
app.put(WINDOW_INTENSITY, (req, res) => {
  console.log(`Received PUT request at ${WINDOW_INTENSITY}`);

  const requestData = req.body;
  storedData = {
    ...storedData,
    windowlightintensity: requestData.windowlightintensity,
  };

  console.log('Stored window light intensity data:', storedData);

  res.status(200).json({ message: 'window light intensity data stored successfully' });
});

app.get(WINDOW_INTENSITY, (req, res) => {
  console.log(`Received GET request at ${WINDOW_INTENSITY}`);
  res.status(200).json({ windowlightintensity: storedData.windowlightintensity });
});




// PUT & GET endpoint for /windowcolorlight
app.put(WINDOW_COLOR, (req, res) => {
  console.log(`Received PUT request at ${WINDOW_COLOR}`);

  const requestData = req.body;
  storedData = {
    ...storedData,
    windowcolorlight: requestData.windowcolorlight,
  };

  console.log('Stored window color data:', storedData);

  res.status(200).json({ message: 'window color data stored successfully' });
});

app.get(WINDOW_COLOR, (req, res) => {
  console.log(`Received GET request at ${WINDOW_COLOR}`);
  res.status(200).json({ windowcolorlight: storedData.windowcolorlight });
});





// PUT & GET endpoint for /seatselection
app.put(SEAT_SELECTION, (req, res) => {
  console.log(`Received PUT request at ${SEAT_SELECTION}`);

  const requestData = req.body;
  storedData = {
    ...storedData,
    seatselection: requestData.seatselection,
  };

  console.log('Stored seat selection data:', storedData);

  res.status(200).json({ message: 'seat selection data stored successfully' });
});

app.get(SEAT_SELECTION, (req, res) => {
  console.log(`Received GET request at ${SEAT_SELECTION}`);
  res.status(200).json({ seatselection: storedData.seatselection });
});



// Start the server on all available network interfaces
app.listen(PORT, () => {
  console.log(`Serverkunow is running on port ${PORT}`);
});
