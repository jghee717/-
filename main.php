<?
session_start();
if(!isset($_SESSION['userid']))
{
  header ('Location: ./register.php');
}

echo "홈(로그인 성공)";

echo "<a href=logout.php>로그아웃</a>";
?>
