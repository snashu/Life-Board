let afterTaxIncome = 88946
let networthStart = 92000
let dailyIncome = afterTaxIncome / 365
let hourlyIncome = dailyIncome / 24
let minuteIncome = hourlyIncome / 60
let secondIncome = minuteIncome / 60

let interestRate = 7

// For money timestamp
let startTime = 1603667512558
let currentIncome = networthStart + (((Date.now() - startTime) * secondIncome) / 1000)
let startIncome = currentIncome

// Work start timestamp
let workStartTime = 1568624400000

const calculateRoundTrips = (interest) => {
    let roundTripCost = 900
    if (interest) {
        return Math.round((currentIncome * (interestRate / 100)) / roundTripCost) 
    } else {
        return Math.round(currentIncome / roundTripCost)
    }
}

const calculateDiveCost = (interest) => {
	let diveCost = 75
	if (interest) {
		return Math.round((currentIncome * (interestRate / 100)) / diveCost)
	} else {
		return Math.round(currentIncome / diveCost)
	}
}

const calculateTimeWorked = () => {
	let now = Date.now()
	let time = []
	// Years
	time.push(Math.floor((now - workStartTime) / 31536000000))
	time.push(Math.floor(((now - workStartTime) / 2628000000) % 12))
	return time
}

const calculateDosa = (rupees) => {
    let dosaCost = 75
    return Math.ceil(rupees / dosaCost)
}

let money = document.getElementById("SnashuMoneyAmt")
money.innerHTML = (currentIncome + secondIncome).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
let rupees = document.getElementById("SnashuRupeeAmt")
rupees.innerHTML = ((currentIncome + secondIncome) * 74).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

let indiaTrips = document.getElementById("IndiaTrips")
indiaTrips.innerHTML = calculateRoundTrips()
let IndiaTripsInterest = document.getElementById("IndiaTripsInterest")
IndiaTripsInterest.innerHTML = calculateRoundTrips(true)

let diveTrips = document.getElementById("TotalDives")
diveTrips.innerHTML = calculateDiveCost()
let diveTripsInterest = document.getElementById("TotalDivesInterest")
diveTripsInterest.innerHTML = calculateDiveCost(true)

let dosa = document.getElementById("SnashuDosaAmt")
dosa.innerHTML = calculateDosa(((currentIncome + secondIncome) * 74)).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

let workYears = document.getElementById("workYears")
let time = calculateTimeWorked()
workYears.innerHTML = time[0]
let workMonths = document.getElementById("workMonths")
workMonths.innerHTML = time[1]


setInterval(() => {
    currentIncome += secondIncome
    money.innerHTML = (currentIncome + secondIncome).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    rupees.innerHTML = ((currentIncome + secondIncome) * 74).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    indiaTrips.innerHTML = calculateRoundTrips()
    dosa.innerHTML = calculateDosa(((currentIncome + secondIncome) * 74)).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    IndiaTripsInterest.innerHTML = calculateRoundTrips(true)
    diveTrips.innerHTML = calculateDiveCost()
    diveTripsInterest.innerHTML = calculateDiveCost(true)
    time = calculateTimeWorked()
    workYears.innerHTML = time[0]
    workMonths.innerHTML = time[1]
}, 1000)

// Maximum Woze
const StartWoze = async() => {
    let audio = document.getElementById("music")
    audio.play()
    for (let i = 0; i < 4; i++) {
        await moveImages(i + 1)
    }
}


const moveImages = (i) => {
    let image = document.getElementById("cozy" + i)
    image.classList.add("cozyGifActive")
    return new Promise((resolve, reject) => {
        setTimeout(async() => {
            resolve()
        }, 10000)
    })
}