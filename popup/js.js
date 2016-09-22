(function(){
	var $$ = {};
	
	$$.data = {
		ls_key:"debug"
	};
	
	// init-run
	$$.__construct = function(){
		chrome.tabs.getSelected(null, function(tab){
			var list = document.getElementById("list");
			if(list != null){
				list.value = tab.url;
			}
		});
		
		var save = document.getElementById("save");
		if(save != null){
			save.onclick = $$.save;
		}
		var view = document.getElementById("view");
		if(view != null){
			view.onclick = $$.view;
		}
	};
	
	$$.save = function(){
		var list = document.getElementById("list");
		if(list != null){
			localStorage.setItem($$.data.ls_key , escape(list.value) );
		};
	};
	
	$$.view = function(){
		var list = document.getElementById("list");
		if(list === null){return}
		var lists = list.value.split("\n");
		document.URL = lists[0];
	};
	
	// run
	window.addEventListener("load",$$.__construct);
})();
