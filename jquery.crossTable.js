/**
 * jQuery CrossTable Plugin
 *
 * Copyright 2011 creatorish.com
 * Author: y.hayashi
 * Site: http://creatorish.com
 * LastUpdate: 2011/02/28
 * HowToUse: http://creatorish.com/lab/1505
 *
**/
jQuery.fn.crossTable = function(option) {
	var hoverTarget;
	var setting = {
		oddClass: "odd",
		evenClass: "even",
		hoverClass: "hover",
		activeClass: "active",
		thHover: false,
		noHoverClass: "noHover",
		direction: "both"
	};
	jQuery.extend(setting,option);
	
	if (setting.thHover === true) {
		hoverTarget = jQuery(this).find("tr").children();
	} else {
		hoverTarget = jQuery(this).find("tr").children("td");
	}
	
	jQuery(this).find("tr:nth-child(odd)").addClass(setting.oddClass);
	jQuery(this).find("tr:nth-child(even)").addClass(setting.evenClass);
	
	hoverTarget.hover(function() {
		var target = jQuery(this);
		if (target.hasClass(setting.noHoverClass)) {
			return;
		}
		var index = target.parent("tr").children().index(jQuery(this));
		target.addClass(setting.activeClass);
		
		if (setting.direction === "both" || setting.direction === "horizon") {
			target.siblings().addClass(setting.hoverClass);
		}
		if (index !== -1 && (setting.direction === "both" || setting.direction === "vertical")) {
			jQuery.each(target.closest("table").find("tr"),function() {
				jQuery(this).children().eq(index).addClass(setting.hoverClass);
			});
		}
		
	},function() {
		var target = jQuery(this);
		if (target.hasClass(setting.noHoverClass)) {
			return;
		}
		var index = target.closest("tr").children().index(jQuery(this));
		target.removeClass(setting.activeClass);
		if (setting.direction === "both" || setting.direction === "horizon") {
			target.siblings().removeClass(setting.hoverClass);
		}
		if (index !== -1 && (setting.direction === "both" || setting.direction === "vertical")) {
			jQuery.each(target.closest("table").find("tr"),function() {
				jQuery(this).children().eq(index).removeClass(setting.hoverClass);
			});
		}
	});
};