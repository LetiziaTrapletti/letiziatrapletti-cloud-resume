
//API call to get number of visitors
async function fetchVisitorCount() {
    try {
        const response = await fetch('https://r8qrilh5sb.execute-api.us-east-1.amazonaws.com/get');
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const count = Number(data.Item.count.N) + 1;
        document.getElementById('countDisplay').textContent = count;
    } catch (error) {
        console.error('Error:', error);
    }
}

//API call to update visitors count
async function updateVisitorCount(){
    fetch('https://r8qrilh5sb.execute-api.us-east-1.amazonaws.com/cloud-resume-visitors-put')
        }

// 
const responsive = {
    0: {
        items: 1
    },
    320 : {
        items: 1
    },
    560 : {
        items: 2
    },
    960 : {
        items : 3
    }
}

// display diagram upon button clicking
function showDiagram() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /* click event on toggle menu*/
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse')
    })
})

