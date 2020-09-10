const data = [
    {
      "type": "RCTScrollView",
      "props": {
        "style": {
          "alignSelf": "center",
          "marginTop": 10
        },
        "collapsable": false
      },
      "children": [
        {
          "type": "View",
          "props": {
            
          },
          "children": [
            {
              "type": "View",
              "props": {
                "style": {
                  "width": 600,
                  "height": 1067.2,
                  "backgroundColor": "white",
                  "borderRadius": 10,
                  "padding": 10,
                  "marginTop": 10,
                  "shadowColor": "black",
                  "shadowOpacity": 0.5,
                  "shadowRadius": 3,
                  "shadowOffset": {
                    "height": 0,
                    "width": 0
                  },
                  "elevation": 2
                }
              },
              "children": [
                {
                  "type": "Text",
                  "props": {
                    "style": {
                      "fontSize": 40,
                      "fontWeight": "bold",
                      "marginBottom": 33.35,
                      "color": "black"
                    }
                  },
                  "children": [
                    "Awesome Blog Post Page"
                  ]
                },
                {
                  "type": "Text",
                  "props": {
                    "style": {
                      "fontSize": 30,
                      "color": "black"
                    }
                  },
                  "children": [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  ]
                },
                {
                  "type": "View",
                  "props": {
                    "style": {
                      "flex": 1,
                      "justifyContent": "flex-end",
                      "alignItems": "center"
                    }
                  },
                  "children": [
                    {
                      "type": "View",
                      "props": {
                        "accessible": true,
                        "style": {
                          "width": 250,
                          "height": 75,
                          "borderRadius": 100,
                          "marginBottom": 10,
                          "backgroundColor": "#41B6E6",
                          "alignItems": "center",
                          "justifyContent": "center",
                          "opacity": 1
                        },
                        "focusable": true
                      },
                      "children": [
                        {
                          "type": "Text",
                          "props": {
                            "style": {
                              "fontWeight": "bold",
                              "fontSize": 30,
                              "color": "white"
                            }
                          },
                          "children": [
                            "Accept"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "View",
                      "props": {
                        "accessible": true,
                        "style": {
                          "width": 250,
                          "height": 75,
                          "borderRadius": 100,
                          "marginBottom": 10,
                          "backgroundColor": "#41B6E6",
                          "alignItems": "center",
                          "justifyContent": "center",
                          "opacity": 1
                        },
                        "focusable": false
                      },
                      "children": [
                        {
                          "type": "Text",
                          "props": {
                            "style": {
                              "fontWeight": "bold",
                              "fontSize": 30,
                              "color": "white"
                            }
                          },
                          "children": [
                            "Decline"
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ];


let dataToreturn = "";
function findObject(objectTree, property) {
    if(typeof objectTree === "object") {
        objectTree.map(objectData => {
                return findObject(objectData["children"], property);
        });
    }
        if(objectTree && objectTree[0] === property) {
            dataToreturn = objectTree[0];
            return objectTree;
        }
};

console.log(findObject(data, "Decline"));
console.log("data1111111",dataToreturn)



