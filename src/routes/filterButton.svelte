<script lang="ts">
  /**
    Main component for handling the filter and columns buttons across all tables 
   
    Props:
        @prop {"columnPopup | filterPopup"} target - Defines if the button should be a column or filter button
        @prop {string} title - Name to be diplayed on the button

    Unused code: 
            <!-- {$_('exchanges.filters_button')} --> 
    */
  import { popup, type PopupSettings } from '@skeletonlabs/skeleton';

  // Props
  export let target: 'columnPopup' | 'filterPopup';
  export let title: string = 'Placeholder';

  import FilterIcon from '../lib/icons/FilterIcon.svelte';
  import ColumnIcon from '../lib/icons/ColumnIcon.svelte';

  let isOpen = false;

  const filterOptions = [
    {
      id: 1,
      value: 'value1',
      label: 'Non KYC',
    },
    {
      id: 2,
      value: 'value2',
      label: 'Non KYC',
    },
    {
      id: 3,
      value: 'value3',
      label: 'Non KYC',
    },
  ];

  const columnOptions = [
    {
      id: 1,
      value: 'value1',
      label: 'Column Option 1',
    },
    {
      id: 2,
      value: 'value2',
      label: 'Column Option 2',
    },
    {
      id: 3,
      value: 'value3',
      label: 'Column Option 3',
    },
  ];

  let filterPopup: PopupSettings = {
    event: 'click',
    target: target,
    placement: 'bottom',
    state: ({ state }) => (isOpen = state),
  };
</script>

<button
  class="btn flex justify-center btn-sm min-w-[45px] rounded-md border-[1px] p-4 dark:border-surface-600 border-[#EDF1F7] !text-base md:px-[18] h-11 disabled:!opacity-100 disabled:!border-[#EDF1F7] disabled:!bg-[#EDF1F7]"
  disabled={isOpen}
  use:popup={filterPopup}
>
  {#if target === 'filterPopup'}
    <FilterIcon className={'stroke-[#6C6C85] fill-[#6C6C85] dark:stroke-white dark:fill-white'} />
  {:else}
    <ColumnIcon className={'stroke-[#6C6C85] dark:stroke-white'} />
  {/if}
  <span class="font-sans text-[#6C6C85] dark:text-white">
    {title}
  </span>
</button>

<div data-popup={target}>
  <div class="card bg-white w-auto flex flex-col shadow-xl py-4 z-40 gap-6">
    {#each target === 'filterPopup' ? filterOptions : columnOptions as { id, value, label } (id)}
      <label class="flex items-center justify-start w-full px-4 cursor-pointer text-[#6C6C85] dark:text-white">
        <input
          type="checkbox"
          class="checkbox border-[#EDF1F7] bg-transparent checked:!bg-[#00AEEF] focus:border-inherit"
          group={target}
          {value}
        />
        <p class="ml-3">{label}</p>
      </label>
    {/each}
  </div>
  <div class="arrow bg-surface-100-800-token" />
</div>
