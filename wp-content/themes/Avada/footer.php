<?php
/**
 * The footer template.
 *
 * @package Avada
 * @subpackage Templates
 */

// Do not allow directly accessing this file.
if ( ! defined( 'ABSPATH' ) ) {
	exit( 'Direct script access denied.' );
}
?>
					<?php do_action( 'avada_after_main_content' ); ?>

				</div>  <!-- fusion-row -->
			</main>  <!-- #main -->
			<?php do_action( 'avada_after_main_container' ); ?>

			<?php global $social_icons; ?>

			<?php
			/**
			 * Get the correct page ID.
			 */
			$c_page_id = Avada()->fusion_library->get_page_id();
			?>

			<?php
			/**
			 * Only include the footer.
			 */
			?>
			<?php if ( ! is_page_template( 'blank.php' ) ) : ?>
				<?php $footer_parallax_class = ( 'footer_parallax_effect' === Avada()->settings->get( 'footer_special_effects' ) ) ? ' fusion-footer-parallax' : ''; ?>

				<div class="fusion-footer<?php echo esc_attr( $footer_parallax_class ); ?>">
					<?php get_template_part( 'templates/footer-content' ); ?>
				</div> <!-- fusion-footer -->
			<?php endif; // End is not blank page check. ?>

			<?php
			/**
			 * Add sliding bar.
			 */
			?>
			<?php if ( Avada()->settings->get( 'slidingbar_widgets' ) && ! is_page_template( 'blank.php' ) ) : ?>
				<?php get_template_part( 'sliding_bar' ); ?>
			<?php endif; ?>
		</div> <!-- wrapper -->

		<?php
		/**
		 * Check if boxed side header layout is used; if so close the #boxed-wrapper container.
		 */
		$page_bg_layout = 'default';
		if ( $c_page_id && is_numeric( $c_page_id ) ) {
			$fpo_page_bg_layout = get_post_meta( $c_page_id, 'pyre_page_bg_layout', true );
			$page_bg_layout = ( $fpo_page_bg_layout ) ? $fpo_page_bg_layout : $page_bg_layout;
		}
		?>
		<?php if ( ( ( 'Boxed' === Avada()->settings->get( 'layout' ) && 'default' === $page_bg_layout ) || 'boxed' === $page_bg_layout ) && 'Top' !== Avada()->settings->get( 'header_position' ) ) : ?>
			</div> <!-- #boxed-wrapper -->
		<?php endif; ?>
		<?php if ( ( ( 'Boxed' === Avada()->settings->get( 'layout' ) && 'default' === $page_bg_layout ) || 'boxed' === $page_bg_layout ) && 'framed' === Avada()->settings->get( 'scroll_offset' ) && 0 !== intval( Avada()->settings->get( 'margin_offset', 'top' ) ) ) : ?>
			<div class="fusion-top-frame"></div>
			<div class="fusion-bottom-frame"></div>
			<?php if ( 'None' !== Avada()->settings->get( 'boxed_modal_shadow' ) ) : ?>
				<div class="fusion-boxed-shadow"></div>
			<?php endif; ?>
		<?php endif; ?>
		<a class="fusion-one-page-text-link fusion-page-load-link"></a>
<?php if ( is_home() || is_front_page() ) : ?>
            <style>	.fusion-page-title-bar { height: 0px !important;} </style>
        <?php endif; ?>
		<?php wp_footer(); ?>
		
		
		<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/assets/css/flipBook/jquery.booklet.latest.css">
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/assets/flipBook/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/assets/flipBook/jquery.booklet.latest.js"></script>

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>


<script>
	    jQuery(function () {

booklet_w=90+ "%";
broswer_h = 90+ "%";
		
	        jQuery("#mybook").booklet({ width:1070, height:530, speed: 300, startingPage: 1, closed: false, closedFrontTitle: "Start",closedFrontChapter: "Start of Book", autoCenter: true, pageNumbers: false, pageBorder: 0, manual: true , hovers: true, hoverWidth:0 , hoverSpeed: 1000,hoverTreshold: 0.50,  hoverClick: false, overlays: true , tabs: false, tabWidth: 100, tabHeight: 100, arrows: true, arrowsHide: false, menu: "#customMenu", pageSelector: true, chapterSelector: true, hash: true  });
});

    </script>
	
	<script language="javascript">
jQuery('.collapse').on('shown.bs.collapse', function(){
jQuery(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
}).on('hidden.bs.collapse', function(){
jQuery(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
});

jQuery(".case_studies_block").css("display","block");
jQuery(".menu-item-has-children").children("a").removeAttr("href");
</script>
	</body>
</html>
