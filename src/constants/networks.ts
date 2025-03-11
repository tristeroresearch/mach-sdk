/**
 * @module networks
 * @exports networks
 * @description This module defines constants for available blockchain networks by retrieving them from the configuration.
 */

import { config } from '../config.js';

export const networks = (await config).get().availableNetworks;
