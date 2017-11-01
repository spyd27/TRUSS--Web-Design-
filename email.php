<?php
if (isset($_POST['email']))
{
	$email = $_POST['email'];
	if(!empty($email))
	{
		if(filter_var($email, FILTER_VALIDATE_EMAIL)==false)
		{
			echo 'not a valid email id';
		}
		else
			echo "Valid";
	}
}