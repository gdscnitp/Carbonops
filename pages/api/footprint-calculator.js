
import { sendError, sendSuccess } from "../../utilities/response-helpers"
//the higher the score, more co2 produced.
//The lower the score the better. If your score is less than 60 points, then you are making a small impact on your planet. If it is higher than 60, then you might want to look for some ways that you can reduce your impact.
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { members, houseSize, meat, packagedFood, dishWasher, washingMachine, householdPurchases, garbageCans, recycles, itemsRecycled, personalTransport, publicTransport, flight } = req.body;
        //validate the input
        console.log(req.body)
        console.log( members, houseSize, meat, packagedFood, dishWasher, washingMachine, householdPurchases, garbageCans, recycles, itemsRecycled, personalTransport, publicTransport, flight )
        try {


            if (!members || !houseSize || !meat || !packagedFood || !householdPurchases
                 || !garbageCans  || publicTransport === undefined) {
                return sendError(res, "Please fill all necessary fields", 2, 404)
            }

            var score = 0;
            //********************for family members********************
            if (members) {
                if (members === 0) {
                    score += 14;
                } else if (members == 1) {
                    score += 12;
                } else if (members === 2) {
                    score += 10;
                } else if (members === 3) {
                    score += 8;
                } else if (members === 4) {
                    score += 6;
                } else if (members === 5) {
                    score += 4;
                } else if (members > 5) {
                    score += 2;
                }
            }

            if (houseSize) {
                if (houseSize === "large") {
                    score += 10
                } else if (houseSize === "medium") {
                    score += 7;
                } else if (houseSize === "small") {
                    score += 4;
                } else if (houseSize === "apartment") {
                    score += 2;
                }
            }

            //************************** for food ****************
            if (meat) {
                if (meat === "daily") {
                    score += 10;
                }
                else if (meat === "weekly") {
                    score += 8;
                }
                else if (meat === "vegetarian") {
                    score += 4;
                }
                else if (meat === "vegan") {
                    score += 2;
                }
            }


            //*********************************** for packaged food**************************
            if (packagedFood) {
                if (packagedFood === "frequently") {
                    score += 12;
                }
                else if (packagedFood === "balanced") {
                    score += 6;
                }
                else if (packagedFood === "no") {
                    score += 2;
                }
            }


            //***********************//for water Consumption***********************
            if (dishWasher) {
                if (dishWasher === "1 to 3 times") {
                    score += 1;
                }
                else if (dishWasher === "4 to 9 times") {
                    score += 2;
                }
                else if (dishWasher === "more than 9 times") {
                    score += 3;
                }
                //also add a no dishwasher and no washing machine option
            }

            //***********************  //for washing machine*************************
            if (washingMachine) {
                if (washingMachine === "1 to 3 times") {
                    score += 1;
                }
                else if (washingMachine === "4 to 9 times") {
                    score += 2;
                }
                else if (washingMachine === "more than 9 times") {
                    score += 3;
                }
            }


            //******************************//for household purchases.************************
            if (householdPurchases) {
                if (householdPurchases > 7) {
                    score += 10;
                }
                else if (householdPurchases >= 5 && householdPurchases <= 7) {
                    score += 8;
                }
                else if (householdPurchases >= 3 && householdPurchases < 5) {
                    score += 6;
                }
                else if (householdPurchases < 3 && householdPurchases > 0) {
                    score += 4;
                }
                //if you purchase almost nothing or only second hand items then add 2 points
                else {
                    score +=2;
                }
            }

            //  ******************************for garbage cans filled ************************
            if (garbageCans) {
                if (garbageCans >= 4) {
                    score += 50;
                }
                else if (garbageCans > 2 && garbageCans <= 3) {
                    score += 40;
                }
                else if (garbageCans > 1 && garbageCans <= 2) {
                    score += 30;
                }
                else if (garbageCans === 1) {
                    score += 20;
                }
                else if (garbageCans < 1) {
                    score += 5;
                }
            }
            /****************///for recycling items ***************
            if (recycles === false) {
                score += 24;
            }
            else {
                score += 24;
                var noOfRecycled = itemsRecycled.length;//items recycled is an array that can have recyclable items 
                //such as glass, plastic, paper, aluminium ,steel, food waste
                score -= 4 * noOfRecycled;
            }

            //********************** for transportation scores **********************/
            if (personalTransport) {
                if (personalTransport > 15000) {
                    score += 12;
                }
                else if (personalTransport >= 10000 && personalTransport <= 15000) {
                    score += 10;
                }
                else if (personalTransport >= 1000 && personalTransport < 10000) {
                    score += 6;
                }
                else if (personalTransport < 1000 && personalTransport > 0) {
                    score += 4;
                }
                //if you dont have a personal vehicle, add nothing
            }

            if (publicTransport) {
                if (publicTransport > 20000) {
                    score += 12;
                }
                else if (publicTransport >= 15000 && publicTransport <= 20000) {
                    score += 10;
                }
                else if (publicTransport >= 10000 && publicTransport < 15000) {
                    score += 6;
                }
                else if (publicTransport > 1000 && publicTransport < 10000) {
                    score += 4;
                }
                else if (publicTransport <= 1000) {
                    score += 2;
                }
            }

            if (flight) {
                if (flight === "within state") {
                    score += 2;
                }
                else if (flight === "another country") {
                    score += 6;
                }
                else if (flight === "another continent") {
                    score += 20;
                }
            }
            console.log(score)
            if (score) return sendSuccess(res, score);
            else return sendError(res, "Score could not be calculated!! Please provide proper inputs!",1,422);
            

        } catch (error) {
            console.log(err.message)
            return sendError(res, err.message, 1, 422);
        }

    }
}