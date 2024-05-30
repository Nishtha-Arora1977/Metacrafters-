/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let nfts = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, artist, year, description) {
    const nft = {
        name: name,
        artist: artist,
        year: year,
        description: description
    };
    nfts.push(nft);
}


// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    nfts.forEach((nft, index) => {
        console.log(`NFT ${index + 1}:`);
        console.log(`  Name: ${nft.name}`);
        console.log(`  Artist: ${nft.artist}`);
        console.log(`  Year: ${nft.year}`);
        console.log(`  Description: ${nft.description}`);
        
    });
}


// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nfts.length;
}


// call your functions below this line
// Minting some NFTs
mintNFT("Sunset Overdrive", "Jane Doe", 2021, "A beautiful sunset over the ocean.");
mintNFT("Abstract Thoughts", "John Smith", 2022, "An abstract piece representing human thoughts.");
mintNFT("Mountain Majesty", "Alice Johnson", 2023, "A stunning view of mountain peaks.");

// Listing all NFTs
listNFTs();

// Printing the total number of NFTs minted
console.log("Total NFTs minted:", getTotalSupply());

