<?php
   $to ="suresh@tesseractlearning.com";
   $Name =$_POST['Name'];
   $EmailId =$_POST['EmailId'];
   $ContactNo =$_POST['Contact'];
   $Subject ="Enquiry from Website - Tesseractlearning.com";
   $headers .= 'From:'.$EmailId . "\r\n";
   $Description ="Hi\r\n \r\n".$_POST['Messege'] ."\r\n\r\nAnd below is my contact details\r\nEmail Id:".$EmailId."\r\nContact Number:".$ContactNo."\r\n\r\nRegards,\r\n".$Name;
   if($Name <> "" && $Name <> " " && $EmailId <> "" && $EmailId <> " " && $EmailId <> "" && $EmailId <> " ") {
      $result = mail($to,$Subject,$Description,$headers);
   }
   else {
      echo "Permision denied";
   }
   if(!$result) {
     echo "";
	} else {
		echo "";
	}
?>
