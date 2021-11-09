/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module adapter-ckfinder/uploadadapterbar
 */

import CKFinderUploadAdapter from './uploadadapter';

/**
 * @extends module:adapter-ckfinder/uploadadapter~CKFinderUploadAdapter
 */
export default class CKFinderUploadAdapterBar extends CKFinderUploadAdapter {
	/**
	 * Bar.
	 */
	foo() {
		return 'bar';
	}
}
