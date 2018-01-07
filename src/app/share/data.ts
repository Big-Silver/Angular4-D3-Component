export const BarData: any[] = [
  {letter: "A", frequency: .08167},
  {letter: "B", frequency: .01492},
  {letter: "C", frequency: .02782},
  {letter: "D", frequency: .04253},
  {letter: "E", frequency: .12702},
  {letter: "F", frequency: .02288},
  {letter: "G", frequency: .02015},
];

export const BarColors: Array<string> = [
  "#98abc5", 
  "#8a89a6", 
  "#7b6888", 
  "#6b486b", 
  "#a05d56", 
  "#d0743c", 
  "#ff8c00"
];

export const PieData: any[] = [
  {age: "<5", population: 2704659},
  {age: "5-13", population: 4499890},
  {age: "14-17", population: 2159981},
  {age: "18-24", population: 3853788},
  {age: "25-44", population: 14106543},
  {age: "45-64", population: 8819342},
  {age: "≥65", population: 612463}
];

export const PieColors: Array<string> = [
  "#98abc5", 
  "#8a89a6", 
  "#7b6888", 
  "#6b486b", 
  "#a05d56", 
  "#d0743c", 
  "#ff8c00"
];

export const LineData: any[] = [
  {"date":"01/01/2016", "a": 250, "b": 0, "c": 0, "d": 0},
  {"date":"01/02/2016", "a": 150, "b": 80, "c": 20, "d": 0},
  {"date":"01/03/2016", "a": 150, "b": 70, "c": 10, "d": 20},
  {"date":"01/04/2016", "a": 150, "b": 30, "c": 30, "d": 40},
  {"date":"01/05/2016", "a": 100, "b": 100, "c": 200, "d": 80},
  {"date":"01/06/2016", "a": 50, "b": 80, "c": 90, "d": 70},
];

export const LineColors: Array<string> = [
  "#ff0000", 
  "#00ff00", 
  "#0000ff", 
  "#ff00ff", 
];

export const NestedPieData =  [
  {
    "nodeData": {
        "age": "<5",
        "population": 60
    },
    "subData": [{
        "nodeData": {
            "age": "<5",
            "population": 60
        },
        "subData": [{
            "nodeData": {
                "age": "<5",
                "population": 60
            }
        }]
    }]
  }, {
    "nodeData": {
        "age": "5-35",
        "population": 100
    },
    "subData": [{
        "nodeData": {
            "age": "5-15",
            "population": 60
        },
        "subData": [{
            "nodeData": {
                "age": "5-10",
                "population": 30
            }
        }, {
            "nodeData": {
                "age": "10-15",
                "population": 30
            }
        }]
    }, {
        "nodeData": {
            "age": "15-35",
            "population": 40
        },
        "subData": [{
            "nodeData": {
                "age": "15-25",
                "population": 25
            }
        }, {
            "nodeData": {
                "age": "25-35",
                "population": 15
            }
        }]
    }]
  }, {
    "nodeData": {
        "age": "35-65",
        "population": 100
    },
    "subData": [{
        "nodeData": {
            "age": "35-50",
            "population": 75
        },
        "subData": [{
            "nodeData": {
                "age": "35-50",
                "population": 75
            }
        }]
    }, {
        "nodeData": {
            "age": "50-65",
            "population": 25
        },
        "subData": [{
            "nodeData": {
                "age": "50-65",
                "population": 25
            }
        }]
    }]
  }, {
    "nodeData": {
        "age": ">65",
        "population": 100
    },
    "subData": [{
        "nodeData": {
            "age": "65-75",
            "population": 60
        },
        "subData": [{
            "nodeData": {
                "age": "65-75",
                "population": 60
            }
        }]
    }, {
        "nodeData": {
            "age": ">75",
            "population": 40
        },
        "subData": [{
            "nodeData": {
                "age": ">75",
                "population": 40
            }
        }]
    }]
}];  
