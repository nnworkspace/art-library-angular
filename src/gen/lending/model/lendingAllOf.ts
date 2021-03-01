/**
 * Art Library of Alpha Org
 * This is a server for Art Library of Alpha Org. 
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: nnworkspace@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface LendingAllOf { 
    /**
     * ID of a artwork. ID of an artwork is a combination of the artist name and the artwork name and optional integer identifier
     */
    id: string;
    self: string;
    /**
     * Date when the artwork is sent to the lender.
     */
    artworkSentOn?: string | null;
    /**
     * User id of the admin who sent the artwork to the lender
     */
    artworkSentBy?: string | null;
    /**
     * Date when the artwork is restored to the art library.
     */
    artworkRestoredOn?: string | null;
    /**
     * User id of the admin who restored the artwork to its storage location in the library, after a user has returned it.
     */
    artworkRestoredBy?: string | null;
}
