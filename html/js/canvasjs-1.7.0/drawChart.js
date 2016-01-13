

drawChartColumn = function () {
    CanvasJS.addColorSet("colorset",
            [//colorSet Array

                "#d9534f",
                "#f0ad4e",
                "#5cb85c",
                "#5bc0de",
                "#428bca",
                "#EEEEEE"
            ]);
    var chart = new CanvasJS.Chart("chartContainer", {
        //animationEnabled: true,
        //animationDuration: 3000,
        interactivityEnabled: false,
        colorSet: "colorset",
        title: {
            text: "Self-appointed"
        },
        toolTip: {
            enabled: false   //enable here
        },
        dataPointMaxWidth: 50,
        axisY: {
            labelFontColor: "white",
            gridThickness: 0,
            tickLength: 0,
            minimum: 0,
            maximum: 100,
            interval: 25,
            lineColor: "white"

        },
        axisX: {
            labelAngle: 45,
            labelFontSize: 13,
            tickLength: 0,
            lineColor: "white"
        },
        legend: {
            verticalAlign: "center",
            horizontalAlign: "left",
            fontColor: "#000",
                     reversed: true
        },
        data: [//array of dataSeries     
            {
                type: "stackedColumn",
                name: ". Curious",
                showInLegend: "true",
                dataPoints: [
                    //max value for Curius is 5
                    {label: "JAVA/JAVA EE", y: 5},
                    {label: "SQL", y: 5},
                    {label: "XML", y: 5},
                    {label: "OOP", y: 5},
                    {label: "Operativ System", y: 5},
                    {label: "NETBEANS/ECLIPSE", y: 5},
                    {label: "RELATIONAL DATABASE", y: 5},
                    {label: "HTML/CSS", y: 5},
                    {label: "BOOTSTRAP", y: 5},
                    {label: "Scrum", y: 5},
                    {label: "UML", y: 5}


                ]
            },
            {
                type: "stackedColumn",
                name: ". Basic",
                showInLegend: "true",
                dataPoints: [
                    //max value for Basic is 20
                    {label: "JAVA/JAVA EE", y: 20},
                    {label: "SQL", y: 20},
                    {label: "XML", y: 20},
                    {label: "OOP", y: 20},
                    {label: "Operativ System", y: 20},
                    {label: "NETBEANS/ECLIPSE", y: 20},
                    {label: "RELATIONAL DATABASE", y: 20},
                    {label: "HTML/CSS", y: 20},
                    {label: "BOOTSTRAP", y: 20},
                    {label: "Scrum", y: 20},
                    {label: "UML", y: 20}

                ]
            },
            {
                type: "stackedColumn",
                name: ". Medium",
                showInLegend: "true",
                dataPoints: [
                    //max value for Medium is 35
                    {label: "JAVA/JAVA EE", y: 35},
                    {label: "SQL", y: 35},
                    {label: "XML", y: 35},
                    {label: "OOP", y: 35},
                    {label: "Operativ System", y: 35},
                    {label: "NETBEANS/ECLIPSE", y: 35},
                    {label: "RELATIONAL DATABASE", y: 35},
                    {label: "HTML/CSS", y: 35},
                    {label: "BOOTSTRAP", y: 35},
                    {label: "Scrum", y: 35},
                    {label: "UML", y: 35}

                ]
            },
            {
                type: "stackedColumn",
                name: ". High",
                showInLegend: "true",
                dataPoints: [
                    //max value for High is 30
                    {label: "JAVA/JAVA EE", y: 10},
                    {label: "SQL", y: 20},
                    {label: "XML", y: 30},
                    {label: "OOP", y: 25},
                    {label: "Operativ System", y: 15},
                    {label: "NETBEANS/ECLIPSE", y: 25},
                    {label: "RELATIONAL DATABASE", y: 15},
                    {label: "HTML/CSS", y: 20},
                    {label: "BOOTSTRAP", y: 10},
                    {label: "Scrum", y: 5},
                    {label: "UML", y: 30}

                ]
            },
            {
                type: "stackedColumn",
                name: ". Master",
                showInLegend: "true",
                dataPoints: [
                    //max value for High is 10
                    {label: "JAVA/JAVA EE", y: 0},
                    {label: "SQL", y: 0},
                    {label: "XML", y: 6},
                    {label: "OOP", y: 0},
                    {label: "Operativ System", y: 0},
                    {label: "NETBEANS/ECLIPSE", y: 0},
                    {label: "RELATIONAL DATABASE", y: 0},
                    {label: "HTML/CSS", y: 0},
                    {label: "BOOTSTRAP", y: 0},
                    {label: "Scrum", y: 0},
                    {label: "UML", y: 2}
                ]
            },
            {
                type: "stackedColumn",
                //showInLegend: "false",
                dataPoints: [
                    //max value for High is 5
                    {label: "JAVA/JAVA EE", y: 200},
                    {label: "SQL", y: 200},
                    {label: "XML", y: 200},
                    {label: "OOP", y: 200},
                    {label: "Operativ System", y: 200},
                    {label: "NETBEANS/ECLIPSE", y: 200},
                    {label: "RELATIONAL DATABASE", y: 200},
                    {label: "HTML/CSS", y: 200},
                    {label: "BOOTSTRAP", y: 200},
                    {label: "Scrum", y: 200},
                    {label: "UML", y: 200}
                ]
            }

        ]
    });
    chart.render();
};

drawChartBar = function () {

    CanvasJS.addColorSet("colorset",
            [//colorSet Array

                "#d9534f",
                "#f0ad4e",
                "#5cb85c",
                "#5bc0de",
                "#428bca",
                "#EEEEEE"
            ]);
    var chart = new CanvasJS.Chart("chartContainer2",
            {
                //animationEnabled: true,
                //animationDuration: 3000,
                interactivityEnabled: false,
                colorSet: "colorset",
                title: {
                    text: "Self-appointed"
                },
                dataPointMaxWidth: 30,
                axisY: {
                    labelFontColor: "white",
                    gridThickness: 0,
                    tickLength: 0,
                    minimum: 0,
                    maximum: 100,
                    interval: 25,
                    lineColor: "white"
                },
                axisX: {
                    labelFontSize: 13,
                    tickLength: 0,
                    lineColor: "white"
                },
                toolTip: {
                    enabled: false   //enable here
                },
                data: [//array of dataSeries     
                    {
                        type: "stackedBar",
                        name: ". Curious",
                        showInLegend: "true",
                        dataPoints: [
                            //max value for Curius is 5
                            {label: "JAVA/JAVA EE", y: 5},
                            {label: "SQL", y: 5},
                            {label: "XML", y: 5},
                            {label: "OOP", y: 5},
                            {label: "Operativ System", y: 5},
                            {label: "NETBEANS/ECLIPSE", y: 5},
                            {label: "RELATIONAL DATABASE", y: 5},
                            {label: "HTML/CSS", y: 5},
                            {label: "BOOTSTRAP", y: 5},
                            {label: "Scrum", y: 5},
                            {label: "UML", y: 5}


                        ]
                    },
                    {
                        type: "stackedBar",
                        name: ". Basic",
                        showInLegend: "true",
                        dataPoints: [
                            //max value for Basic is 20
                            {label: "JAVA/JAVA EE", y: 20},
                            {label: "SQL", y: 20},
                            {label: "XML", y: 20},
                            {label: "OOP", y: 20},
                            {label: "Operativ System", y: 20},
                            {label: "NETBEANS/ECLIPSE", y: 20},
                            {label: "RELATIONAL DATABASE", y: 20},
                            {label: "HTML/CSS", y: 20},
                            {label: "BOOTSTRAP", y: 20},
                            {label: "Scrum", y: 20},
                            {label: "UML", y: 20}

                        ]
                    },
                    {
                        type: "stackedBar",
                        name: ". Medium",
                        showInLegend: "true",
                        dataPoints: [
                            //max value for Medium is 35
                            {label: "JAVA/JAVA EE", y: 35},
                            {label: "SQL", y: 35},
                            {label: "XML", y: 35},
                            {label: "OOP", y: 35},
                            {label: "Operativ System", y: 35},
                            {label: "NETBEANS/ECLIPSE", y: 35},
                            {label: "RELATIONAL DATABASE", y: 35},
                            {label: "HTML/CSS", y: 35},
                            {label: "BOOTSTRAP", y: 35},
                            {label: "Scrum", y: 35},
                            {label: "UML", y: 35}

                        ]
                    },
                    {
                        type: "stackedBar",
                        name: ". High",
                        showInLegend: "true",
                        dataPoints: [
                            //max value for High is 30
                            {label: "JAVA/JAVA EE", y: 10},
                            {label: "SQL", y: 20},
                            {label: "XML", y: 30},
                            {label: "OOP", y: 25},
                            {label: "Operativ System", y: 15},
                            {label: "NETBEANS/ECLIPSE", y: 25},
                            {label: "RELATIONAL DATABASE", y: 15},
                            {label: "HTML/CSS", y: 20},
                            {label: "BOOTSTRAP", y: 15},
                            {label: "Scrum", y: 5},
                            {label: "UML", y: 30}

                        ]
                    },
                    {
                        type: "stackedBar",
                        name: ". Master",
                        showInLegend: "true",
                        dataPoints: [
                            //max value for High is 10
                            {label: "JAVA/JAVA EE", y: 0},
                            {label: "SQL", y: 0},
                            {label: "XML", y: 6},
                            {label: "OOP", y: 0},
                            {label: "Operativ System", y: 0},
                            {label: "NETBEANS/ECLIPSE", y: 0},
                            {label: "RELATIONAL DATABASE", y: 0},
                            {label: "HTML/CSS", y: 0},
                            {label: "BOOTSTRAP", y: 0},
                            {label: "Scrum", y: 0},
                            {label: "UML", y: 2}
                        ]
                    },
                    {
                        type: "stackedBar",
                        //name: "Master",
                        //showInLegend: "false",
                        dataPoints: [
                            //max value for High is 5
                            {label: "JAVA/JAVA EE", y: 200},
                            {label: "SQL", y: 200},
                            {label: "XML", y: 200},
                            {label: "OOP", y: 200},
                            {label: "Operativ System", y: 200},
                            {label: "NETBEANS/ECLIPSE", y: 200},
                            {label: "RELATIONAL DATABASE", y: 200},
                            {label: "HTML/CSS", y: 200},
                            {label: "BOOTSTRAP", y: 200},
                            {label: "Scrum", y: 200},
                            {label: "UML", y: 200}
                        ]
                    }

                ]
            });
    chart.render();

};




drawChartFutureColumn = function () {

    CanvasJS.addColorSet("colorset",
            [//colorSet Array

                "#d9534f",
                "#f0ad4e",
                "#5cb85c",
                "#5bc0de",
                "#428bca",
                "#EEEEEE"
            ]);
    var chart = new CanvasJS.Chart("chartContainer3",
            {
                backgroundColor: "#18bc9c",
                //animationEnabled: true,
                //animationDuration: 3000,
                interactivityEnabled: false,
                colorSet: "colorset",
                  dataPointMaxWidth: 50,
                title: {
                   // text: ""
                },
                 
                axisY: {
                    labelFontColor: "#18bc9c",
                    gridThickness: 0,
                    tickLength: 0,
                    minimum: 0,
                    maximum: 100,
                    interval: 25,
                    lineColor: "#18bc9c"
                },
                axisX: {
                    labelFontColor: "white",
                    labelAngle: 45,
                    labelFontSize: 13,
                    tickLength: 0,
                    lineColor: "#18bc9c"
                },
                legend: {
                    verticalAlign: "center",
                    horizontalAlign: "left",
                     fontColor: "#FFF",
                     reversed: true
                },
                toolTip: {
                    enabled: false   //enable here
                },
                data: [//array of dataSeries     
                    {
                        type: "stackedColumn",
                        name: ". Curious",
                        
                        showInLegend: "true",
                        dataPoints: [
                            //max value for Curius is 5
                            {label: "Android Programming", y: 5},
                            {label: "Objective C", y: 5},
                            {label: "AngularJS", y: 5},
                            {label: "PHP", y: 5},
                            {label: ".NET/C#", y: 5},
                            {label: "GIT", y: 5},
                            {label: "Groovy & Grails", y: 5},
                            {label: "Linux", y: 5},
                            {label: "C/C++", y: 5},
                            {label: "JavaScript", y: 5},
                            {label: "Node.js", y: 5}

                        ]
                    },
                    {
                        type: "stackedColumn",
                        name: ". Basic",
                        showInLegend: "true",
                        dataPoints: [
                            //max value for Basic is 20
                            {label: "Android Programming", y: 20},
                            {label: "Objective C", y: 12},
                            {label: "AngularJS", y: 15},
                            {label: "PHP", y: 5},
                            {label: ".NET/C#", y: 15},
                            {label: "GIT", y: 20},
                            {label: "Groovy & Grails", y: 20},
                            {label: "Linux", y: 20},
                            {label: "C/C++", y: 20},
                            {label: "JavaScript", y: 20},
                            {label: "Node.js", y: 2}
                        ]
                    },
                    {
                        type: "stackedColumn",
                        name: ". Medium",
                        showInLegend: "true",
                        dataPoints: [
                            //max value for Medium is 35
                            {label: "Android Programming", y: 1},
                            {label: "Objective C", y: 0},
                            {label: "AngularJS", y: 0},
                            {label: "PHP", y: 0},
                            {label: ".NET/C#", y: 0},
                            {label: "GIT", y: 0},
                            {label: "Groovy & Grails", y: 10},
                            {label: "Linux", y: 15},
                            {label: "C/C++", y: 35},
                            {label: "JavaScript", y: 5},
                            {label: "Node.js", y: 0}
                        ]
                    },
                    {
                        type: "stackedColumn",
                        name: ". High",
                        showInLegend: "true",
                        dataPoints: [
                            //max value for High is 30


                        ]
                    },
                    {
                        type: "stackedColumn",
                        name: ". Master",
                        showInLegend: "true",
                        dataPoints: [
                            //max value for High is 10

                        ]
                    },
                    {
                        type: "stackedColumn",
                       
                        //showInLegend: "false",
                        dataPoints: [
                            //max value for High is 5
                            {label: "Android Programming", y: 500},
                            {label: "Objective C", y: 500},
                            {label: "AngularJS", y: 500},
                            {label: "PHP", y: 500},
                            {label: ".NET/C#", y: 500},
                            {label: "GIT", y: 200},
                            {label: "Groovy & Grails", y: 200},
                            {label: "Linux", y: 200},
                            {label: "C/C++", y: 200},
                            {label: "JavaScript", y: 200},
                            {label: "Node.js", y: 200}

                        ]
                    }

                ]
            });
    chart.render();

};

drawChartFutureBar = function () {

    CanvasJS.addColorSet("colorset",
            [//colorSet Array

                "#d9534f",
                "#f0ad4e",
                "#5cb85c",
                "#5bc0de",
                "#428bca",
                "#EEEEEE"
            ]);
    var chart = new CanvasJS.Chart("chartContainer4",
            {
                backgroundColor: "#18bc9c",
                //animationEnabled: true,
                //animationDuration: 3000,
                interactivityEnabled: false,
                colorSet: "colorset",
                title: {
                    //text: "Self-appointed"
                },
                legend: {
                    fontColor: "#FFF"
                },
                dataPointMaxWidth: 30,
                axisY: {
                    labelFontColor: "#18bc9c",
                    gridThickness: 0,
                    tickLength: 0,
                    minimum: 0,
                    maximum: 100,
                    interval: 25,
                    lineColor: "#18bc9c"
                },
                axisX: {
                    labelFontColor: "white",
                    labelFontSize: 13,
                    tickLength: 0,
                    lineColor: "#18bc9c"
                },
                toolTip: {
                    enabled: false   //enable here
                },
                data: [//array of dataSeries     
                    {
                        type: "stackedBar",
                        name: ". Curious",
                        showInLegend: "true",
                        dataPoints: [
                            //max value for Curius is 5
                            {label: "Android Programming", y: 5},
                            {label: "Objective C", y: 5},
                            {label: "AngularJS", y: 5},
                            {label: "PHP", y: 5},
                            {label: ".NET/C#", y: 5},
                            {label: "GIT", y: 5},
                            {label: "Groovy & Grails", y: 5},
                            {label: "Linux", y: 5},
                            {label: "C/C++", y: 5},
                            {label: "JavaScript", y: 5},
                            {label: "Node.js", y: 5}

                        ]
                    },
                    {
                        type: "stackedBar",
                        name: ". Basic",
                        showInLegend: "true",
                        dataPoints: [
                            //max value for Basic is 20
                            {label: "Android Programming", y: 20},
                            {label: "Objective C", y: 12},
                            {label: "AngularJS", y: 15},
                            {label: "PHP", y: 5},
                            {label: ".NET/C#", y: 15},
                            {label: "GIT", y: 20},
                            {label: "Groovy & Grails", y: 20},
                            {label: "Linux", y: 20},
                            {label: "C/C++", y: 20},
                            {label: "JavaScript", y: 20},
                            {label: "Node.js", y: 2}


                        ]
                    },
                    {
                        type: "stackedBar",
                        name: ". Medium",
                        showInLegend: "true",
                        dataPoints: [
                            //max value for Medium is 35
                            {label: "Android Programming", y: 1},
                            {label: "Objective C", y: 0},
                            {label: "AngularJS", y: 0},
                            {label: "PHP", y: 0},
                            {label: ".NET/C#", y: 0},
                            {label: "GIT", y: 0},
                            {label: "Groovy & Grails", y: 10},
                            {label: "Linux", y: 15},
                            {label: "C/C++", y: 35},
                            {label: "JavaScript", y: 5},
                            {label: "Node.js", y: 0}
                        ]
                    },
                    {
                        type: "stackedBar",
                        name: ". High",
                        showInLegend: "true",
                        dataPoints: [
                            //max value for High is 30
                        ]
                    },
                    {
                        type: "stackedBar",
                        name: ". Master",
                        showInLegend: "true",
                        dataPoints: [
                            //max value for High is 10
                        ]
                    },
                    {
                        type: "stackedBar",
                        
                        //showInLegend: "false",
                        dataPoints: [
                            //max value for High is 5
                            {label: "Android Programming", y: 500},
                            {label: "Objective C", y: 500},
                            {label: "AngularJS", y: 500},
                            {label: "PHP", y: 500},
                            {label: ".NET/C#", y: 500},
                            {label: "GIT", y: 200},
                            {label: "Groovy & Grails", y: 200},
                            {label: "Linux", y: 200},
                            {label: "C/C++", y: 200},
                            {label: "JavaScript", y: 200},
                            {label: "Node.js", y: 200}
                        ]
                    }
                ]
            });
    chart.render();

};
