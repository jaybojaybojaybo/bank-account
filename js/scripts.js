function Account(name, balance) {
  this.accountName = name;
  this.accountBalance = balance;
}

Account.prototype.deposit = function(deposit) {
  return (this.accountBalance += deposit)
}

Account.prototype.withdraw = function(withdraw) {
  return (this.accountBalance -= withdraw)
}

$(function() {
  $("form#new-account").submit(function(event) {
    var userName = $("#name").val();
    var userBalance = parseFloat($("#initial-deposit").val());
    myAccount = new Account(userName, userBalance);

    $("#current-balance").text("$ " + myAccount.accountBalance.toFixed(2));
    $(this).trigger('reset');
    event.preventDefault();

  });

  $("button#deposit").click(function() {
    var depositAmount = parseFloat($("#deposit-amount").val());
    var newBalance = myAccount.deposit(depositAmount);
    $("#current-balance").text("$ " + newBalance.toFixed(2));
    $('form#transaction').trigger('reset');


  });

  $('button#withdraw').click(function() {
    var withdrawalAmount = parseFloat($("#withdrawal-amount").val());
    var newBalance = myAccount.withdraw(withdrawalAmount);
    $("#current-balance").text("$ " + newBalance.toFixed(2));
    $('form#transaction').trigger('reset');
  })



});
