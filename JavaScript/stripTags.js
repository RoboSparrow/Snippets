//  strip_tags equivalent
function stripTags(node){
	return node.textContent || node.innerText || '';
};