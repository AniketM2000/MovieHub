const  imageArray= [ 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C6AB0EDCE8F41882EBBB782B76DD4F05D7E360D7C3F23B4F6D02C24699B26105/scale?width=1200&aspectRatio=1.78&format=jpeg',
    'https://mir-s3-cdn-cf.behance.net/project_modules/fs/8a6a68144592045.628efcd3e77b5.jpg',
    'https://www.newsbugz.com/wp-content/uploads/2020/01/Bad-Boys-for-Life-Movie-Download5-1.png',
    'https://www.intofilm.org/intofilm-production/scaledcropped/870x489https%3A/s3-eu-west-1.amazonaws.com/images.cdn.filmclub.org/film__3143-the-pursuit-of-happyness--hi_res-008f2e57.jpg/film__3143-the-pursuit-of-happyness--hi_res-008f2e57.jpg',
    'https://rukminim1.flixcart.com/image/850/500/kyyqpow0/poster/g/a/i/small-kungu-fu-poster-multicolor-photo-paper-print-12-inch-x-18-original-imagb2tfnxnk8wtt.jpeg?q=90',
    'https://occ-0-55-38.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXfvTr1-ACYiQlCmRJ3nWy5CoOAs4dYa-tPikvX82lu09L_1CUffsBvnbXMbA7T-MGwM8lfmswC2NOUt5C8gFp07Fq__n9C0uf_4.jpg?r=9cd',
     'https://images8.alphacoders.com/106/thumb-1920-1065658.jpg',];
let i = 0;
setInterval(() => {
    $('#imgMovie').prop('src', imageArray[i]);
    if(i==6){
        i=0;
        
    }else{
        i++;

    }
}, 2000);