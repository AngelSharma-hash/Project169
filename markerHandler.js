AFRAME.registerComponent("markerhandler",{
    init: async function(){
        this.el.addEventListener("markerFound",()=>{
            console.log("marker is found")
            this.handleMarkerFound()
        });
        this.el.addEventListener("markerLost",()=>{
            console.log("marker was not found")
            this.handleMarkerLost()
        });
    },
    handleMarkerFound: function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display="flex";
        
        var orderButton = document.getElementById("order-button")
        var orderSummaryButton = document.getElementsById("order-summaryy-button");

        orderButton.addEventListener("click",()=>{
            swal({
                icon:"https://i.imgur.com/eL20gY1.png",
                title:"Thanks For Using Our Service!",
                text:"",
                timer:2000,
                buttons:false
            })
        })

        orderSummaryButton.addEventListener("click",()=>{
            swal({
                icon:"warning",
                title:"Order Summary",
                text:"Work In Progress"
            })
        })
    },

    handleMarkerLost: function () {
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none";
    }
})