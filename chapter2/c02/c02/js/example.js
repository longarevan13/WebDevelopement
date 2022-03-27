var greeting = 'Howdy ';
var Name = 'Molly';
var message = ', please check your order:';

var welcome = greeting + Name + message;

var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

var el = document.getElementById('greeting');

el.textContent = welcom;

var elSign = document.getElementById('userSign');
elSign.textContent = sign;

var elTiles = document.getElementById('tiles');
elTiles.TextContent = tiles;

var elSubTotal = document.getElementById('subTotal');
elTiles.textContent = '$' + subtotal;

var elSubTotal = document.getElementById('shipping');
elSubTotal.textContent = '$' + shipping;

var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;

