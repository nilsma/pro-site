/**
 * a function to change the facebook icon from
 * grayscale to color on mouseenter, and back again
 * on mouseleave
 */
function altFacebook() {
    var oldsrc = 'images/facebook_gray.png';
    var newsrc = 'images/facebook_orange.png';
    $('#facebook').mouseenter(function() {
        $(this).attr('src', newsrc);
    }).mouseleave(function() {
        $(this).attr('src', oldsrc);
    });
}

/**
 * a function to change the twitter icon from
 * grayscale to color on mouseenter, and back again
 * on mouseleave
 */
function altTwitter() {
    var oldsrc = 'images/twitter_alt_gray.png';
    var newsrc = 'images/twitter_alt_orange.png';
    $('#twitter').mouseenter(function() {
        $(this).attr('src', newsrc);
    }).mouseleave(function() {
        $(this).attr('src', oldsrc);
    });
}

/**
 * a function to change the gootle icon from
 * grayscale to color on mouseenter, and back again
 * on mouseleave
 */
function altGoogle() {
    var oldsrc = 'images/google_gray.png';
    var newsrc = 'images/google_orange.png';
    $('#google').mouseenter(function() {
        $(this).attr('src', newsrc);
    }).mouseleave(function() {
        $(this).attr('src', oldsrc);
    });
}

/**
 * a function to change the youtube icon from
 * greyscale to color on mouseenter, and back again
 * on mouseleave
 */
function altYoutube() {
    var oldsrc = 'images/linkedin_gray.png';
    var newsrc = 'images/linkedin_orange.png';
    $('#linkedin').mouseenter(function() {
        $(this).attr('src', newsrc);
    }).mouseleave(function() {
        $(this).attr('src', oldsrc);
    });
}

/**
 * a function that initiates the settings of the page's elements
 * on window load
 */
window.onload = function initiate() {
    altFacebook();
    altTwitter();
    altGoogle();
    altYoutube();
};