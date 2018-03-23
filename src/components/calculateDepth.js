export default function calculate(feed){
    let lastFeed = feed[feed.length - 1].props;

    for(let i = 0; i < lastFeed.resList.length; i++){
        lastFeed.resList[i].depth += lastFeed.modalState.currencyAmount / lastFeed.resList.length;
    }
    for(let i = 0; i < lastFeed.paidList.length; i++){
        lastFeed.paidList[i].depth -= lastFeed.modalState.currencyAmount / lastFeed.paidList.length;
    }

}