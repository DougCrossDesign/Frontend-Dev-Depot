<style>
	body{
		padding-top:62px;
		/*background-image: url(__viewer/images/febg.jpg);*/
		background-size: inherit;
		background-attachment: fixed;
		background-position: center top;
		background-repeat: no-repeat;
		background-color: #252525;
	}
	.comp-sdw{
		box-shadow: 0px 0px 26px 0px rgba(0,0,0,1);
	}
	.comp-info strong{
		display: inline-block;
		padding-right:5px;
	}
	.comp-info span{
		display: inline-block;
		padding-right:20px;
	}
	.code code{
		display: block;
		padding:20px;
		tab-size: 4;
		overflow: auto;
		box-shadow:inset 1px 1px 7px rgba(0,0,0, 1);
	}
	.codel code{
		display: block;
		padding:20px;
		tab-size: 4;
		overflow: auto;
		box-shadow:inset 1px 1px 7px rgba(0,0,0, 1);
		max-height: 300px;
	}
	.header-fed{
		position: fixed;
		top:0px;
		left:0px;
		right:0px;
		z-index: 8888;
		box-shadow: 0px 0px 16px 0px rgba(0,0,0,1);
		background: #07074E;
	}
	.header-fed a{
		color:#fff;
	}
	.header-fed .wrap-pad{
		padding-left: 20px;
    	padding-right: 20px;
	}
	.lmenu{
		overflow:auto;
		width:250px;
		position: fixed;
		left:0px;
		top:62px;
		bottom: 0px;
		z-index:9999;
		background-color: #fff;
		color:#000;
		padding:25px 20px;
		font-size: 15px;
		height: calc ( 100% - 62px );
		box-shadow: 0px 9px 15px 3px rgba(0,0,0,1)
	}
	.lmenu > a{
		display:block;
	    padding: 5px 0px;
		border-bottom: 1px solid #e4e4e4;
		color:#484848;
		transition: all .2s ease-in-out;
	}
	.lmenu > a:nth-child(4n+1):hover {
	    color: #00B3C5;
	    font-weight: 800;
	}
	.lmenu > a:nth-child(4n+2):hover {
	    color: #A8C045;
	    font-weight: 800;
	}
	.lmenu > a:nth-child(4n+3):hover {
	    color: #F26C57;
	    font-weight: 800;
	}
	.lmenu > a:nth-child(4n+4):hover {
	    color: #FFD54C;
	    font-weight: 800;
	}
	.lsubmenu{
		border: 1px solid #e4e4e4;
		padding:5px;
	}
	.lsubmenu a{
		display: block;
		font-size:13px;
		padding:3px 3px 3px 10px;
		color:#484848;
	}
	.lsubmenu a:hover{
		background-color: #ccc;
		color:#fff;
	}
	.lsubmenu > a:nth-child(4n+1):hover {
	    background: #00B3C5;
	    font-weight: 800;
	}
	.lsubmenu > a:nth-child(4n+2):hover {
	    background: #A8C045;
	    font-weight: 800;
	}
	.lsubmenu > a:nth-child(4n+3):hover {
	    background: #F26C57;
	    font-weight: 800;
	}
	.lsubmenu > a:nth-child(4n+4):hover {
	    background: #FFD54C;
	    font-weight: 800;
	}
	.partial_wlayouts{
		padding:5px;
		color:#484848;
	}
	.content{
		width: calc( 100% - 250px );
		padding:30px;
		margin-left: 250px;
	}
</style>
</body>
</html>
