<? 
	$charset = 'utf8';

	$name = $_POST['name'];
	$number = $_POST['number'];
	$email = $_POST['email'];
	
	$dbh = new PDO('mysql:host=localhost;dbname = cg19583_126', 'cg19583', 'qweRtzxcvghj89892323'); 
	$stmt = $dbh->prepare("INSERT INTO 'test_cite'('time', name, number, email) VALUES (NOW(), :name, :number, :email)");
	$stmt->bindParam(':name', $name);
	$stmt->bindParam(':number', $number);
	$stmt->bindParam(':email', $email);
	$stmt->execite();

	echo '1';

?>