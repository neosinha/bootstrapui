

var Bootstrap  = function () {
	
	this.balert = function(msg) {
		console.log('Bootstrap alert');
		alert(msg);
	}; 
		
	this.createElement = function (tag, id) {
		//creates and returns a document element 
		// sets the tag with that id
		el = document.createElement(tag);
		//alert('Element Created: '+ tag);
		if (id) {
			el.setAttribute('id', id);
		}
		return el; 
	}; 

	this.well = function (id, content) {
		el = this.createElement('div', id);
		el.setAttribute('class', 'well');
		
		if (content) {
			for (i=0; i < content.length; i++) {
				ctx = content[i];
				el.appendChild(ctx);
			}
		}
		return el; 
	}
	
	
	this.jumbotron = function (id, content) {
		el = this.createElement('div', id);
		el.setAttribute('class', 'jumbotron');
		el.appendChild(content);
		console.log('Jumbo: '+ JSON.stringify(el));
		return el
	}; 
	
	this.button = function (id, name, onclick) {
		el = this.createElement('button', id);
		el.setAttribute('onclick', onclick);
	};
	
	this.createPanels = function (id, panelArr) {
		/*<div class="panel-group">
		  <div class="panel panel-default">
		    <div class="panel-body">Panel Content</div>
		  </div>*/
		
		pgroup = this.createElement('div', id);
		pgroup.setAttribute('class', 'panel-group');
		
		for (i=0; i < panelArr.length; i++) {
			panel = this.createElement('div', id+i);
			panelEl = panelArr[i];
			if (panelEl['type']) {
				panel.setAttribute('class', 'panel panel-'+panelEl['type']);
			} else {
				panel.setAttribute('class', 'panel panel-default');
			}
			if (panelEl['heading']) {
				paneh = this.createElement('div', null);
				panelh = this.createElement('div', null);
				panelh.setAttribute('class', 'panel-heading');
				if (typeof panelEl['heading'] == 'string') {
					panelh.innerHTML = panelEl['heading']; 
				} else {
					panelh.appendChild(panelEl['heading']); 
				}
				panel.appendChild(panelh);
			}
			
			panelcontent = this.createElement('div', null);
			panelcontent.setAttribute('class', 'panel-body');
			if (typeof panelEl['content'] == 'string') {
				panelcontent.innerHTML = panelEl['content']; 
			} else {
				panelcontent.appendChild(panelEl['content']); 
			}
			panel.appendChild(panelcontent);
			pgroup.appendChild(panel);
		}
		
		return pgroup; 
	}
	
	this.navtabs = function (id, style, tabs) {
		navtabview = document.createElement('div');
		navtabview.setAttribute('id', id);
		navdiv = document.createElement('div');
		navdiv.setAttribute('class', 'nav-tabs-navigation');
	
			nav = document.createElement('ul');
			nav.setAttribute('class', 'nav nav-tabs nav-'+style);
		
			for (i=0; i < tabs.length; i++) {
				tab = tabs[i]; 
				li = document.createElement('li');
				if ( i == 0) {
					li.setAttribute('class', 'active');
				}
				a = document.createElement('a');
				a.innerHTML = tab['name'];
				a.setAttribute('data-toggle', 'tab');
				a.setAttribute('href', '#tab'+id+i.toString());
				li.appendChild(a);
				nav.appendChild(li); 
			}
			
			navdiv.appendChild(nav);
			navtabview.appendChild(navdiv);
		
			tabview = document.createElement('div');
			tabview.setAttribute('class', 'tab-content text-center');
			tabview.setAttribute('id', 'tabview-'+id);
		
			for (i=0; i < tabs.length; i++) {
				tabpane = document.createElement('div');
				tabpane.setAttribute('id', 'tab'+id+i.toString());
				tab = tabs[i];
				if (i ==0 ) {
					tabpane.setAttribute('class', 'tab-pane active');
				} else {
					tabpane.setAttribute('class', 'tab-pane');
				}
			
				tabpane.appendChild(tab['content']); 
				tabview.appendChild(tabpane);
			}
			navtabview.appendChild(tabview);
		
		 return navtabview; 
	}; 

	this.table = function (id, classname, header, tabledata) {
		tbl = document.createElement('table');
		tbl.setAttribute('class', 'table '+classname);
		tbl.setAttribute('id', id);
		
		//header section
		thead = document.createElement('thead');
		tr = document.createElement('tr');
		
		for (idx = 0; idx < header.length; idx++) {
			th = document.createElement('th');
			th.innerHTML = header[idx]; 
			tr.appendChild(th);
		}
		thead.appendChild(tr);
		tbl.appendChild(thead);
		
		//body section
		tbody = document.createElement('tbody');
		for (idx = 0 ; idx < tabledata.length; idx++) {
			rdata = tabledata[idx]; 
			tr = document.createElement('tr');
			for (ridx= 0; ridx < rdata.length; ridx++) {
				td = document.createElement('td');
				td.innerHTML = rdata[ridx];
				tr.appendChild(td);
			}
			tbody.appendChild(tr);
		}
		tbl.appendChild(tbody);
		
		return tbl; 
	}; 
	
	
	this.h1 = function(id, text, attributes) {
		el = document.createElement('h1'); 
		if (id)
			el.setAttribute('id', id);
		el.innerHTML = text; 
		if (attributes) {
			for (i=0; i < attributes.length; i++) {
				attr = attributes[i]; 
				el.setAttribute(attr['name'], attr['value']);
			}
		}
		
		return el;
	}; 
	
	this.h2 = function(id, text, attributes) {
		el = document.createElement('h2'); 
		if (id)
			el.setAttribute('id', id);
		el.innerHTML = text; 
		if (attributes) {
			for (i=0; i < attributes.length; i++) {
				attr = attributes[i]; 
				el.setAttribute(attr['name'], attr['value']);
			}
		}
		
		return el;
	}; 
	
	this.h3 = function(id, text, attributes) {
		el = document.createElement('h3'); 
		if (id)
			el.setAttribute('id', id);
		el.innerHTML = text; 
		if (attributes) {
			for (i=0; i < attributes.length; i++) {
				attr = attributes[i]; 
				el.setAttribute(attr['name'], attr['value']);
			}
		}
		
		return el;
	}; 
	
	this.p = function(id, text, attributes) {
		el = document.createElement('p'); 
		if (id)
			el.setAttribute('id', id);
		el.innerHTML = text; 
		if (attributes) {
			for (i=0; i < attributes.length; i++) {
				attr = attributes[i]; 
				el.setAttribute(attr['name'], attr['value']);
			}
		}
		
		return el;
	}; 
	
	
	
	
	this.br = function () {
		el = this.createElement('br', null);
		return el;
	};  


	this.hr = function () {
		el = this.createElement('hr', null);
		return el;
	}; 
	
	this.navbar = function(id, banner) {
		nav = this.createElement('nav', null);
		nav.setAttribute('class', 'navbar navbar-default');
			cont = this.createElement('div', null);
			cont.setAttribute('class', 'container');
			
				nheader = this.createElement('div', null);
				nheader.setAttribute('class', 'navbar-header');
					an = this.createElement('a');
					an.setAttribute('class','brand navbar-brand');
					an.innerHTML = banner; 
				
					nheader.appendChild(an); 
				cont.appendChild(nheader);
		nav.appendChild(cont);
		
		return nav;
	}
	
	this.createFormElement = function(id, inputdef) {
		//label, inputtype, placeholder, value) {
		p = this.createElement('div');
		if (inputdef['type'] == "checkbox" ) {
			p.setAttribute('class', 'checkbox');
		} else {
			p.setAttribute('class', 'form-group');
		}
		 if (inputdef['label']) {
			 lbl = document.createElement('label');
			 if (inputdef['type'] == "checkbox" ) {
				 lbl.setAttribute('class', 'checkbox inline');
			 } else {
				 lbl.setAttribute('class', 'pull-left');
			 }
			 lbl.innerHTML = inputdef['label'];
			p.appendChild(lbl);
		 }
			
		inp = document.createElement('input');
		inp.setAttribute('type', inputdef['type']);
		
		if (inputdef['class']) {
			inp.setAttribute('class',
							 'form-control border-input '+ inputdef['class']);
		} else {
			inp.setAttribute('class', 'form-control border-input');
		}
		
		if (inputdef['name']) {
			inp.setAttribute('name', inputdef['name']); 
		}
		
		if (inputdef['onclick']) {
			inp.setAttribute('onclick', inputdef['onclick']); 
		}
		
		if (inputdef['placeholder']) {
			inp.setAttribute('placeholder', inputdef['placeholder']);
		}
		
		if (inputdef['id']) {
			inp.setAttribute('id', id);
		} else {
			inp.setAttribute('id', 'input'+id);
		}
		
		if (inputdef['value']) {
			inp.setAttribute('value', inputdef['value']);
		}
		
		if (inputdef['type'] == "checkbox" ) {
			 inp.setAttribute('class', 'checkbox inline');
			 lbl.appendChild(inp);
		} else {
			p.appendChild(inp);
		}
		return p; 
	}; 
	
	
	this.createForm = function (id, inputarray) {
		form = document.createElement('form');
		form.setAttribute('id', id);
		form.setAttribute('action', 'javascript:null');
		
		//txtformgroup = document.createElement('div');
		//txtformgroup.setAttribute('id', id+'div');
		//txtformgroup.setAttribute('class', 'form-group');
		
		form.appendChild(this.br());
		for (i=0; i < inputarray.length; i++) {
			inputdef = inputarray[i]; 
			idlx = id.toLowerCase()+i.toString();
			if (inputdef['id']) {
				idlx = inputdef['id'];
			}
			inpformel = this.createFormElement(idlx, inputdef);
			form.appendChild(inpformel);
		}
		
		//form.appendChild(txtformgroup);
		
		return form; 
	}; 
	
	

	this.createCheckBoxes = function (id, checkboxes) {
		/*<div class="checkbox">
	    <label>
	      <input type="checkbox"> Check me out
	    </label>*/
		chboxgrp = document.createElement('div');
		tbl = document.createElement('table');
		tbl.setAttribute('class', 'table-striped');
		tbody = document.createElement('tdboy');
		//chboxgrp.setAttribute('class', 'form-group');
		for (i=0; i < checkboxes.length; i++) {
			checkbox = checkboxes[i]; 
			
			ipdx = id.toLowerCase()+i.toString(); 
			
			trow = document.createElement('tr');
			chkbox = document.createElement('td');
				lbl = document.createElement('label');
				lbl.setAttribute('class', 'custom-control custom-checkbox');
				//lbl.setAttribute('for', ipdx);
			
				inp = document.createElement('input');
				inp.setAttribute('type', 'checkbox');
				inp.setAttribute('placeholder', checkbox);
				inp.setAttribute('class', 'custom-control-input');
				inp.setAttribute('id', ipdx);
			
				//inp.setAttribute('data-toggle', 'checkbox');
				lbl.appendChild(inp);
				span = document.createElement('span');
				span.setAttribute('class', 'custom-control-indicator');
				lbl.appendChild(span);
			
				chkbox.appendChild(lbl);
			trow.appendChild(chkbox);
			namex = document.createElement('td');
			namex.innerHTML = checkbox; 
			trow.appendChild(namex);
			
			tbody.appendChild(trow);
		}
		tbl.appendChild(tbody);
		chboxgrp.appendChild(tbl);
		return chboxgrp; 
	}

	
	this.createNotification = function(alerttype, msg) {
		div = this.createElement('div', null);
		div.setAttribute('class', 'alert alert-dismissible alert-'+alerttype);
		
		a = this.createElement('a', null);
		a.setAttribute('href', 'javacript:null');
		a.setAttribute('class', 'close');
		a.setAttribute('data-dismiss', 'alert' );
		a.setAttribute('aria-label', 'close');
		a.innerHTML = '&times;';
		
		div.innerText = msg; 
		
		div.appendChild(a);
		
		return div;
	}
	
	
	this.addSubViewById = function(parentViewid, elems) {
		pview = document.getElementById(parentViewid);
		view = this.addSubView(pview, elems);
		return view;
	}; 

	this.addSubView = function(parentView, elems) {
		if (parentView) {
			for (i=0; i < elems.length; i++) {
				el = elems[i];
				parentView.appendChild(el);
			}
		}
		console.log("==>"+JSON.stringify(parentView));
		return parentView;  
	};
	
	this.addSubViewToMain = function(elems) {
		parentView = document.getElementById('mcontent');
		if (parentView) {
			for (i=0; i < elems.length; i++) {
				el = elems[i];
				parentView.appendChild(el);
			}
		}
		console.log("==>"+JSON.stringify(parentView));
		return parentView;  
	};
	
	this.clearViewById = function(viewid) {
		var myNode = document.getElementById(viewid);
		while (myNode.firstChild) {
		    myNode.removeChild(myNode.firstChild);
		}
	};
	
	this.clearView = function() {
		var myNode = document.getElementById('mcontent');
		while (myNode.firstChild) {
		    myNode.removeChild(myNode.firstChild);
		}
	};
	
	
}
