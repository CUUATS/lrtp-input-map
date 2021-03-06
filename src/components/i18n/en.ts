export const phrases = {
  "lrtp": {
    "address-search": {
      "prompt": "Search by address or place name..."
    },
    "app": {
      "label": "C-U Transportation Voices",
      "basemap": {
        "imagery": "Imagery",
        "hybrid": "Imagery with Labels"
      },
      "comment": {
        "label": "Comments",
        "location": "Choose a Location",
        "add": "Add a Comment",
        "added": "Your comment has been added.",
        "moderation": "Your comment is awaiting moderation.",
        "error": "An error occurred. Please try again later."
      },
      "intro": {
        "next": "Next",
        "prev": "Prev",
        "done": "Done",
        "close": "Close",
        "welcome": {
          "title": "Welcome",
          "text": "Welcome to %{app_label} by the Champaign County Regional Planning Commission. You can browse the map to see comments."
        },
        "view": {
          "title": "View Comments",
          "text": "The comments pane shows the details of all comments currently visible in the map."
        },
        "locate": {
          "title": "Locate a Comment",
          "text": "Tap the locate button to zoom the map to a comment."
        },
        "like": {
          "title": "Like a Comment",
          "text": "Show your support for a comment by tapping the star."
        },
        "add": {
          "title": "Add a Comment",
          "text": "Add a comment by tapping the plus button, selecting a location, and filling out the comment form."
        },
        "survey": {
          "title": "Take the Survey",
          "text": "Tap the lightbulb to take a brief survey about the future of transportation in our region. Happy browsing!"
        }
      }
    },
    "survey-controller": {
      "title": "Take the Transportation Survey",
      "text": "Please share your thoughts about the future of transportation in our community by taking a brief survey. You can access the survey later using the %{icon} icon in the top toolbar.",
      "later": "Take Later",
      "now": "Take Now"
    },
    "form": {
      "labels": {
        "mode": "Choose a Mode of Transportation",
        "category": "Choose a Category",
        "comment": "Choose a Comment",
        "details": "Provide Additional Details (optional)"
      },
      "pedestrian": {
        "label": "Walking or Wheelchair",
        "crosswalk": {
          "label": "Crosswalks",
          "ok": "Crosswalk functions well",
          "add": "Add a crosswalk here",
          "pavement": "Fix uneven pavement in crosswalk",
          "repaint": "Repaint crosswalk"
        },
        "curbramp": {
          "label": "Curb Ramps",
          "ok": "Curb ramp functions well",
          "add": "Add a curb ramp here",
          "design": "Change curb ramp design (please describe below)",
          "repair": "Repair or replace curb ramp"
        },
        "sidewalk": {
          "label": "Sidewalks",
          "ok": "Sidewalk functions well",
          "add": "Add a sidewalk here",
          "obstruction": "Remove a sidewalk obstruction (please describe below)",
          "repair": "Repair or replace sidewalk",
          "widen": "Widen narrow sidewalk"
        },
        "sign": {
          "label": "Signs and Signals",
          "ok": "Signs and signals function well",
          "stop": "Add stop signs here",
          "pedestriansignal": "Add pedestrian signals here",
          "trafficsignal": "Add traffic signals here",
          "crossingtime": "Increase crossing time",
          "movesignal": "Move pedestrian signal or pushbutton",
          "speedlimit": "Reduce roadway speed limit"
        },
        "other": {
          "label": "Other",
          "goodaccessibility": "Good accessibility for multiple modes here",
          "lighting": "Add lighting here",
          "roundabout": "Convert intersection to a roundabout",
          "separation": "Increase separation between motorists and pedestrians",
          "other": "Other (please describe below)"
        }
      },
      "bicycle": {
        "label": "Bicycle",
        "facility": {
          "label": "Bike Lanes and Paths",
          "ok": "Bike lanes and paths function well",
          "onstreet": "Add an on-street bike lane",
          "offstreet": "Add an off-street sidepath or trail",
          "pavement": "Fix uneven pavement in bike lane or path",
          "repair": "Repair or replace bike lanes or paths"
        },
        "parking": {
          "label": "Bike Parking",
          "ok": "Bike parking functions well",
          "add": "Add bike racks",
          "change": "Change type of bike racks",
          "repair": "Repair or replace bike racks"
        },
        "sign": {
          "label": "Signs and Signals",
          "ok": "Signs and signals function well",
          "signal": "Add bike-activated traffic signals here",
          "stop": "Add stop signs here",
          "wayfinding": "Add or improve wayfinding signs for cyclists",
          "crossingtime": "Increase crossing time",
          "speedlimit": "Reduce speed limit"
        },
        "other": {
          "label": "Other",
          "goodaccessibility": "Good accessibility for multiple modes here",
          "lighting": "Add lighting here",
          "roundabout": "Convert intersection to a roundabout",
          "visibility": "Improve visibility for cyclists",
          "separation": "Increase separation between motorists and cyclists",
          "other": "Other (please describe below)"
        }
      },
      "bus": {
        "label": "Bus",
        "amenity": {
          "label": "Benches, Shelters, and Amenities",
          "ok": "Amenities at this stop function well",
          "bench": "Add a bench at this stop",
          "landingpad": "Add a landing pad at the stop for easier boarding",
          "shelter": "Add a shelter at this stop",
          "audiblesign": "Add audible signage at this stop for routes and information",
          "bikeparking": "Add bike parking at this stop",
          "lighting": "Add lighting at this stop"
        },
        "stop": {
          "label": "Bus Stop Locations",
          "ok": "Bus stop location funcitons well",
          "safe": "I feel safe at this stop",
          "unsafe": "I feel unsafe at this stop",
          "add": "Add a stop here",
          "move": "Move this stop (please describe below)",
          "remove": "Remove this stop"
        },
        "schedule": {
          "label": "Schedule and Service",
          "ok": "Bus service at this location functions well",
          "add": "Add a new route here (please describe below)",
          "frequency": "Increase bus frequency here",
          "weekday": "Increase weekday service hours here",
          "weekend": "Increase weekend service hours here",
          "delays": "Bus: Reduce bus delays here"
        },
        "other": {
          "label": "Other",
          "goodaccessibility": "Good accessibility for multiple modes here",
          "pavement": "Improve pavement condition for buses",
          "separation": "Increase separation between buses and other roadway users",
          "conflicts": "Reduce conflicts between buses and other roadway users",
          "other": "Other (please describe below)"
        }
      },
      "automobile": {
        "label": "Automobile",
        "driving": {
          "label": "Driving Conditions",
          "ok": "Good automobile circulation here",
          "lighting": "Add street lighting",
          "design": "Change roadway design or width (please describe below)",
          "pavement": "Fix uneven pavement",
          "markings": "Improve pavement markings",
          "visibility": "Improve visibility for drivers",
          "speedlimit": "Reduce speed limit",
          "congestion": "Reduce traffic congestion"
        },
        "multimodal": {
          "label": "Pedestrian, Bike, and Bus Facilities",
          "ok": "Good accessibility for multiple modes here",
          "bikelane": "Add an on-street bike lane",
          "sidepath": "Add an off-street sidepath",
          "sidewalk": "Add an off-street sidewalk",
          "buslane": "Add a dedicated bus lane"
        },
        "sign": {
          "label": "Signs and Signals",
          "ok": "Signs and signals function well",
          "signal": "Add bike-activated traffic signals here",
          "stop": "Add stop signs here",
          "wayfinding": "Add or improve wayfinding signs for cyclists",
          "crossing": "Increase crossing time",
          "speedlimit": "Reduce speed limit"
        },
        "parking": {
          "label": "Parking",
          "ok": "Parking functions well",
          "add": "Add automobile parking here",
          "reduce": "Reduce automobile parking here",
          "bike": "Add bicycle racks here"
        },
        "other": {
          "label": "Other",
          "goodaccessibility": "Good accessibility for multiple modes here",
          "lighting": "Add street lighting",
          "roundabout": "Convert intersection to a roundabout",
          "visibility": "Improve visibility for drivers",
          "separation": "Increase separation between motorists and cyclists",
          "other": "Other (please describe below)"
        }
      },
      "train": {
        "label": "Train",
        "ok": "I like the current options for train travel",
        "highspeed": "Add high-speed or bullet train access to Chicago",
        "destination": "Add train service to another city",
        "frequency": "Increase train trip frequency",
        "delays": "Reduce train delays",
        "prices": "Reduce train ticket prices",
        "other": "Other (please describe below)"
      },
      "plane": {
        "label": "Plane",
        "ok": "I like the current options for plane travel",
        "destination": "Add direct flights to additional locations (please describe below)",
        "times": "Add more departure and arrival times",
        "transit": "Add transit option to and from the airport",
        "parking": "Offer free parking at the airport",
        "other": "Other (please describe below)"
      }
    }
  }
};
