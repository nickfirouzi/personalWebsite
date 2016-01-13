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
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'nick');

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
define('AUTH_KEY',         'PRpP|Q-/c9fenDx8o}kCxV0Ivn-_ao5Sc#|.$+Sb e}gmz_@~tPMc6?i3L@rAYI|');
define('SECURE_AUTH_KEY',  '1+3Q?l/#an#)LOsvJNIUw5e^ZN2/~E1Y93R%)>X;:D7-a^[6cy44E5HgBWe[|r^s');
define('LOGGED_IN_KEY',    'I~2UQB98~Xd[+uU(T6KnWz61j|[-Ie#i7C*F$[@95HmRtr.y6Hv-$faj-Dq7 -`_');
define('NONCE_KEY',        'Ec2Q_u?@^,=.H/msf-VL|+dY6F2dHY{?7?5M-ETiBGwX|3fBZ8e(+=$cYmmz46k{');
define('AUTH_SALT',        'FKFXb))Y Pxy+<b|t>NjLQ!f17mssvDm-;0vzwB_g<<XCK?FCoVX`WouU j,4Mbu');
define('SECURE_AUTH_SALT', 'z~gy98q2(69b|BNOGak{B0w}ymPH0&F<6HN8+oGPk38hjd8{WfV^gM:oqASb#KK2');
define('LOGGED_IN_SALT',   'zbyI71`{M*s9PY;.({w`7oPz2-LGT6C0a!#{^+_eG!#*94nQ0@~wq9q$[5~bcv8n');
define('NONCE_SALT',       'i)>@]gt#V It3au4@eDgXyi6H$oxU#.j/j6YA!_|Xc6OiPT?D]F3J];s5/&=r|L6');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

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
