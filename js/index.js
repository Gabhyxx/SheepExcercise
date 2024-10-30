let sheepList = [ true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true ]
let sheepCount = 0;

function countingSheepsWithFor()
{
    for (let i=0;i<sheepList.length;i++)
    {
        if (sheepList[i]==true)
        {
            sheepCount++;
        }
    }
    return sheepCount;
}

function showInConsole()
{
    if (sheepCount > 0)
    {
        console.log("There's " + sheepCount + " sheeps in the corral");
    }

    if (sheepCount == 0)
    {
        console.log("Oh no! The wolfs ate all the sheeps!");
    }

    if(sheepCount < 0)
    {
        console.error("It's impossible to have negative sheeps...")
    }
}

countingSheepsWithFor();
showInConsole();