import React, {Component} from 'react'
import './App.css';
import Header from './components/Header';
import Body from './components/Body'

class App extends Component {

  state = {
    users: [
        
      {
        "gender": "male",
        "name": {
          "title": "Mr",
          "first": "Arturo",
          "last": "Gonzalez"
        },
        "location": {
          "street": {
            "number": 4846,
            "name": "Calle de La Luna"
          },
          "city": "Arrecife",
          "state": "Islas Baleares",
          "country": "Spain",
          "postcode": 94677,
          "coordinates": {
            "latitude": "-22.2737",
            "longitude": "-133.7501"
          },
          "timezone": {
            "offset": "+9:00",
            "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
          }
        },
        "email": "arturo.gonzalez@example.com",
        "login": {
          "uuid": "25e781bf-e8b8-4cb4-8b1d-fc386818f52f",
          "username": "beautifulswan989",
          "password": "please",
          "salt": "3FRHXTsa",
          "md5": "bee3049e294fb6bac341f365f7f99934",
          "sha1": "28103daa2bae2b8624ac68fbf8c2731384ddf6a7",
          "sha256": "39a1f3dcd1ad3f11257371a50c93863b5bfbc6fb1b580f983be983d098ed5d50"
        },
        "dob": {
          "date": "1987-03-16T10:00:48.808Z",
          "age": 34
        },
        "registered": {
          "date": "2005-11-03T10:39:14.606Z",
          "age": 16
        },
        "phone": "935-059-319",
        "cell": "650-382-520",
        "id": {
          "name": "DNI",
          "value": "94590030-G"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/55.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/55.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/55.jpg"
        },
        "nat": "ES"
      },
      {
        "gender": "male",
        "name": {
          "title": "Mr",
          "first": "Baptiste",
          "last": "Gaillard"
        },
        "location": {
          "street": {
            "number": 2871,
            "name": "Rue Principale"
          },
          "city": "Nancy",
          "state": "Calvados",
          "country": "France",
          "postcode": 27047,
          "coordinates": {
            "latitude": "9.6370",
            "longitude": "-156.3183"
          },
          "timezone": {
            "offset": "-7:00",
            "description": "Mountain Time (US & Canada)"
          }
        },
        "email": "baptiste.gaillard@example.com",
        "login": {
          "uuid": "5c3840f7-8f00-4604-8215-34f923b865c3",
          "username": "bluefish450",
          "password": "vagabond",
          "salt": "RIyuVnXv",
          "md5": "1d16d26d40d5d3c028c920267113b045",
          "sha1": "3be5a4db1c9bfc49f0529d2d52f2b374b6189c92",
          "sha256": "60f60d417c8324779a1a8746a9f91bd92e23caf1017682ec35b8cd4e025272da"
        },
        "dob": {
          "date": "1958-06-01T18:25:34.963Z",
          "age": 63
        },
        "registered": {
          "date": "2015-08-20T15:51:33.467Z",
          "age": 6
        },
        "phone": "01-09-98-93-52",
        "cell": "06-19-62-11-78",
        "id": {
          "name": "INSEE",
          "value": "1NNaN67771980 70"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/9.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/9.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/9.jpg"
        },
        "nat": "FR"
      },
      {
        "gender": "female",
        "name": {
          "title": "Mrs",
          "first": "Aino",
          "last": "Jokinen"
        },
        "location": {
          "street": {
            "number": 965,
            "name": "Itsenäisyydenkatu"
          },
          "city": "Posio",
          "state": "Kainuu",
          "country": "Finland",
          "postcode": 11656,
          "coordinates": {
            "latitude": "53.0906",
            "longitude": "-54.6198"
          },
          "timezone": {
            "offset": "+4:00",
            "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
          }
        },
        "email": "aino.jokinen@example.com",
        "login": {
          "uuid": "e2464c11-1ffd-4e68-82f9-422bcbccb3ed",
          "username": "yellowgorilla266",
          "password": "stone55",
          "salt": "TFY0YQqy",
          "md5": "7485472a6700517821794a1d05b30704",
          "sha1": "18af52a427c07ba2a6de87c7102b563c8839e676",
          "sha256": "3c7bc2496a3ee88364a0fd42e21718817fa1c4d5e402d9136c923251e727b8ca"
        },
        "dob": {
          "date": "1953-01-22T19:20:54.008Z",
          "age": 68
        },
        "registered": {
          "date": "2012-03-23T17:38:17.627Z",
          "age": 9
        },
        "phone": "07-731-447",
        "cell": "044-922-42-70",
        "id": {
          "name": "HETU",
          "value": "NaNNA128undefined"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/63.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/63.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/63.jpg"
        },
        "nat": "FI"
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Body users={this.state.users} />
        </header>
      </div>
    );
    }
  
}

export default App;
