let num = 45;

// もし変数numが3の倍数ならば、「３の倍数です」という文字列を出力する
if (num % 3 == 0) {
  console.log('3の倍数です');
}

else if (num % 5 == 0) {
  console.log('5の倍数です');
}

else if (num % 3 == 0 && num % 5 == 0) {
    console.log('3と5の倍数です');
}

else {
        console.log(num);
}