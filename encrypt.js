/**
 * aes加密代码
 */


/**
 * aes加密方法
 * @param data  明文
 * @returns  密文
 */

 function aesEncrypt(data) {
		  
	var key = CryptoJS.enc.Utf8.parse("szwl2016itbmfhtd");
    
    var encrypted = CryptoJS.AES.encrypt(data, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString(); //此步在转为字符串过程中已进行了Base64加密
			
	// encrypted.ciphertext.toString(); 
	// 输出：'44971e715853a821c79e589bcd3ca9cee0ef1bc923582fa8b7c26ec5655d2e06'这种格式
}


 function aesEncryptForNetease(data,secreatKey) {
    //var data1 = CryptoJS.enc.Utf8.parse(data);;
    var iv = CryptoJS.enc.Utf8.parse('0102030405060708');
	var key = CryptoJS.enc.Utf8.parse(secreatKey);
    
    var encrypted = CryptoJS.AES.encrypt(data, key, {
		iv:iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString(); //此步在转为字符串过程中已进行了Base64加密
			
	// encrypted.ciphertext.toString(); 
	// 输出：'44971e715853a821c79e589bcd3ca9cee0ef1bc923582fa8b7c26ec5655d2e06'这种格式
}

 function aesDecryptForNetease(data,secreatKey) {
	var key = CryptoJS.enc.Utf8.parse(secreatKey);   
    var iv  = CryptoJS.enc.Utf8.parse('0102030405060708');   
    var decrypt = CryptoJS.AES.decrypt(data, key, { iv: iv,mode:CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7});  
    
	return CryptoJS.enc.Utf8.stringify(decrypt).toString();  
	//return decrypt;
 }


 
 
function aesDecrypt(encrypted) {
	var key = CryptoJS.enc.Utf8.parse("szwl2016itbmfhtd");
    var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    decrypted = CryptoJS.enc.Utf8.stringify(decrypted);// 转换为 utf8 字符串
    return decrypted;
}


