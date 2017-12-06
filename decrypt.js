/**
 * aes解密代码
 */


/**
 * aes解密方法
 * @param data 密文
 * @returns  明文
 */
function AESDecrypt(data){
	//密钥
	var key =  "fg5tred4qaedasds";

	key  = CryptoJS.enc.Hex.parse( CryptoJS.SHA256( key ).toString() );
	var iv   = CryptoJS.enc.Latin1.parse('');

	var decrypted = CryptoJS.AES.decrypt(data, key, {iv:iv,padding:CryptoJS.pad.ZeroPadding});
	var dataBase64 =  decrypted.toString(CryptoJS.enc.Utf8);
	dataBase64 = dataBase64.replace(/-/g, "+").replace(/_/g, "/");

	var length = dataBase64.length;
	var slast = dataBase64.charAt(length-1).charCodeAt();

	return Base64.decode( dataBase64.substr(0, length-slast) );

}