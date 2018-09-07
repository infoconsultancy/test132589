<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'beascepa_iclipse');

/** MySQL database username */
define('DB_USER', 'beascepa_bhaiya');

/** MySQL database password */
define('DB_PASSWORD', 'bhaiya123');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'U`}Hw^Qc;PsUempdzw}OSz.%F0~c7edA?VjF|)2#cP)by9!c8Mys!xkdfn93kGNs');
define('SECURE_AUTH_KEY',  'r2>HIC-;E GlDD-Uo<M1dF[l.?KV0Q273w7lTzjwLc%lY%07%q%Ud]ieWV>MkDnh');
define('LOGGED_IN_KEY',    'VG_*V&80,:w*..}j4#kSkeU7MF}bI_zS]}p#8{:_m3M83Q[ASzmZhP#bH=+@g^fS');
define('NONCE_KEY',        '24-_&y1zdQxV&xp}f8A|aVj02nAP&!>nsxE7e(J#0$c3F%9CLo?KPFH>Q1y` awY');
define('AUTH_SALT',        '<X1@T5N!H^Xd<P5|X=Fa}F0t^@Hy1jkW-bq7cYXV*~!`_t-dF`G*K/qJqFnc>{zB');
define('SECURE_AUTH_SALT', 'Xs}v-6vewI1o;ao y&7 JVKSM_[Q+7SlIwR3fK!=%_j@~|8#&l3W`0?Z+N[{LE8:');
define('LOGGED_IN_SALT',   'fl^VFRR]jEefj;9KZyE?8kPIeu}6a97F93xFcCT_.S!~&#B~X>1TdWk^[q5aGOB&');
define('NONCE_SALT',       '*n>eJ+|*!(d00he1]rUwlXgIQA6_5I~:lFS65Cz(W ;Om1@A}^af/]j(6@pcD4z{');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'ic_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
